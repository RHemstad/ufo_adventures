import "./updateProfileName.css";
import { useUpdateUserName } from "./UserContextProvider";
import { useUserName } from "./UserContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Subheader from '../subheader/Subheader.jsx';

const UpdateProfileName = () => {
  const navigate = useNavigate();
  const updateUserName = useUpdateUserName();
  const userName = useUserName();
  let [newUserName, setNewUserName] = useState('');

  const onUpdateUserName = (e) => {
    e.preventDefault();
    if(newUserName !== "") {
    updateUserName(newUserName);
    navigate('/')
    } else {
      alert("Please enter a name.")
    }
    //console.log(`this is ${newUserName}`);
  };

  return (
    <>


    <Subheader>Your Profile:</Subheader>

    <section className="sign-in" id="profile">
    <h3>Please Sign In To Access Your Account</h3>

          <form>
            <div>
            <label htmlFor="name">Name: <span aria-label="required">*</span></label>
            <input
                required
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
            />
            </div>
            <div>
            <button className="primary-button" onClick={onUpdateUserName} type="submit">Sign In</button>
            </div>
          </form>

        </section>

          </>

  );
};

export default UpdateProfileName;
