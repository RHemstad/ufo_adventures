
import "./game.css"
import { useEffect, useRef} from "react"
import { Link, useNavigate } from "react-router-dom";
//same as useReducer but easier to use
import { useImmerReducer } from "use-immer"
import Subheader from '../subheader/Subheader.jsx';







//we want to get 4 unique aliens from the array of 50
function onlyUniqueAliens(pics) {
  const uniqueAliens = []
  //filter out the duplicates
  //we are using 4 pics per question so need a multiple of 4 total in array
  const uniquePics = pics.filter(pic => {
    //the pattern from the data for where the alien name comes from in the image url
    const alien = pic.split("/")[4]
    //only if the current alien is not already in the array and the url does not have a space in it
    if (!uniqueAliens.includes(alien) && !pic.includes(" ")) {
      uniqueAliens.push(alien)
      return true
    }
  })
  //make sure the return is a multiple of 4 so we won't have duplicate aliens (ends in a multiple of 4)
  //ie if 17 pictures divided by 4 - use Math.floor to round down
  return uniquePics.slice(0, Math.floor(uniquePics.length / 4) * 4)
}

//can change and reuse state
function ourReducer(draft, action) {
  if (draft.points > draft.highScore) draft.highScore = draft.points

  //application will dispatch different actions
  //with immer you can return nothing

  switch (action.type) {

    case "receiveHighScore":
      draft.highScore = action.value
      if (!action.value) draft.highScore = 0
      return
    case "decreaseTime":
      if (draft.timeRemaining <= 0) {
        draft.playing = false
      } else {
        draft.timeRemaining--
      }
      return

    case "guessAttempt":
      if (!draft.playing) return
      if (action.value === draft.currentQuestion.answer) {
        draft.points++
        draft.currentQuestion = generateQuestion()
      } else {
        draft.strikes++
        if (draft.strikes >= 3) {
          draft.playing = false
        }
      }
      return

    case "startPlaying":
      draft.timeRemaining = 30
      draft.points = 0
      draft.strikes = 0
      draft.playing = true
      draft.currentQuestion = generateQuestion()
      return
      
    case "addToCollection":
      draft.bigCollection = draft.bigCollection.concat(action.value)
      return
  }

  //*************** GENERATE THE QUESTION ************** */
  function generateQuestion() {
    if (draft.bigCollection.length <= 12) {
      draft.fetchCount++
    }

    //every time you generate a question, remove the first 4 from the array
    if (draft.currentQuestion) {
      draft.bigCollection = draft.bigCollection.slice(4, draft.bigCollection.length)
    }

    //which is considered the correct answer from the 4 offered?
    //random number between 0 and 3  
    const tempRandom = Math.floor(Math.random() * 4);

    //which array with 4 pics will be used for the question
    const justFour = draft.bigCollection.slice(0, 4);

    return { alien: justFour[tempRandom].split("/")[4], photos: justFour, answer: tempRandom }
  }
}

//everything the game is going to need
const initialState = {
  points: 0,
  strikes: 0,
  timeRemaining: 0,
  highScore: 0,
  bigCollection: [],
  currentQuestion: null,
  playing: false,
  fetchCount: 0
}

function HeartIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={props.className} viewBox="0 0 16 16">
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
    </svg>
  )
}

function Game() {
  const timer = useRef(null);
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    dispatch({ type: "receiveHighScore", value: localStorage.getItem("highscore") })
  }, [dispatch])

  useEffect(() => {
    if (state.highScore > 0) {
      localStorage.setItem("highscore", state.highScore)
    }
  }, [state.highScore])

  useEffect(() => {
    if (state.bigCollection.length) {
      state.bigCollection.slice(0, 8).forEach(pic => {
        new Image().src = pic
      })
    }
  }, [state.bigCollection])

  useEffect(() => {
    if (state.playing) {
      console.log("Interval created.")
      timer.current = setInterval(() => {
        dispatch({ type: "decreaseTime" })
      }, 1000)

      return () => {
        console.log("interval cleared from cleanup")
        clearInterval(timer.current)
      }
    }
  }, [dispatch, state.playing])


  //**** GET THE DATA FROM THE ALIEN API */
  //**** NOT USING AXIOS - JUST USING FETCH */
  //****  */
  useEffect(() => {
    const reqController = new AbortController()

    async function go() {
      try {
        const picsPromise = await fetch('https://bexology.com/species.json', { signal: reqController.signal })
        
        const pics = await picsPromise.json();
        //console.log(pics.message);
        const uniquePics = onlyUniqueAliens(pics.message)
        //console.log(uniquePics)
        dispatch({ type: "addToCollection", value: uniquePics })
      } catch {
        console.log("Our request was cancelled.")
      }
    }
    go()

    return () => {
      reqController.abort()
    }
  }, [dispatch, state.fetchCount])

  return (
    <>
    <section id="game">
    <Subheader bigtitle="yo" smalltitle='Uep'>Planning Your Abduction: </Subheader>
    
    <h3>Alien Species Identification Game</h3>

    
    {/* ******************************************* */}
    {/* ************* GAME PLAY AREA ************** */}

      {state.currentQuestion && (
        <>
        <div className="gameplayarea">

        <div className="scoreboard">
            <div className="timer">
                <span className="text-zinc-400 mr-3">Time Remaining:
                <span className="timer">0:{state.timeRemaining < 10 ? "0" + state.timeRemaining : state.timeRemaining}</span>
                </span>
            </div>

            <div className="lives-to-lose">
            {/* Lives */}

                {[...Array(3 - state.strikes)].map((item, index) => {
                return <HeartIcon key={index} className="lives" />
                })}
                {[...Array(state.strikes)].map((item, index) => {
                return <HeartIcon key={index} className="lives-lost" />
                })}
            </div>
        </div>

          {/* WHAT ALIEN YOU NEED TO IDENTIFY */}
          <h4>Which alien is the {state.currentQuestion.alien}?</h4>

          {/* THE IMAGES YOU NEED TO PICK FROM */}
          <div className="alien-container">
            {state.currentQuestion.photos.map((photo, index) => {
              return <div onClick={() => dispatch({ type: "guessAttempt", value: index })} key={index} className="picBox" style={{ backgroundImage: `url(${photo})` }}></div>
            })}
          </div>

            </div>
        </>
      )}

      {/* if the game is not playing and there are pictures in the array, just show the play button */}
      {/* don't display images if you haven't started playing */}
      {/* don't show the play button until the images have loaded */}
      {/* only display the question if you are playing */}

      {state.playing === false && Boolean(state.bigCollection.length) && !state.currentQuestion && (
        <p className="text-center">
          <button onClick={() => dispatch({ type: "startPlaying" })} className="primary-button">Play Game</button>
        </p>
      )}

      {/* set up the conditions for the game over screen to launch */}
      {(state.timeRemaining <= 0 || state.strikes >= 3) && state.currentQuestion && (

        <div className="gameover">

          <div>
            {state.timeRemaining <= 0 && <h2>Time's Up!</h2>}
            {state.strikes >= 3 && <h3>3 Strikes; You're Out!</h3>}

            <h3 className="scorestuff">Your score:{" "}
              <span className="points">{state.points}</span>
            </h3>

            <p className="high-score">Your all-time high score: {state.highScore}</p>
            <button onClick={() => dispatch({ type: "startPlaying" })} className="primary-button">Play again</button>
            <p className="end-game"><Link to="/">End Game</Link></p>
          </div>
        </div>
      )}
    </section>
    </>
  )
}

export default Game
