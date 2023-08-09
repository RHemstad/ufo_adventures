import React from 'react'
import { Link} from "react-router-dom";

const Home = () => {
  return (
    <>
    
    <p>Home Component (which is loaded in the content component)</p>

   <p>Example of a link that will appear to demonstrate routing working.
   When you click on the Tickets link click on the top name "home" to return to the home page</p>
    <Link to="/tickets">Tickets</Link>
    

    Hello World
    
    <p>Branch test 2</p>
    
    </>
  )
}

export default Home