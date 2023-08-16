import React, { useState, useContext } from "react";

//there are two context.Provider's created  in this file
//one is for the user name
//the other is for the update user name (setUserName function - info from the user form will be passed to this function)
const UserNameContext = React.createContext();
const UpdateUserNameContext = React.createContext();

//here is our userProvider - it is a wrapper we need for our app
//destructure the value out and the children which represent the other components
export const UserProvider = ({ value, children }) => {
/* this is the "above mentioned below, we take that value in and we have some internal state - userName and setUserName
  that userName is being used by our userNameContext.provider and is represented by our value userName
  and the setUserName is being used by our updateUserNameContext.provider and is represented by our value setUserName */
  
  const [userName, setUserName] = useState(value);

  return (
<UserNameContext.Provider value={userName}>
      <UpdateUserNameContext.Provider value={setUserName}>
{/* grabs the children here in between the contexts, and above we take that value in and here have some internal state - see note above  */}
        {children}
      </UpdateUserNameContext.Provider>
</UserNameContext.Provider>
  );
};

// to use the above we export two custom hooks 

//HOOK #1 - useUserName
//wrapped by UserNameContext 
//extracts from above <UserNameContext.Provider value={userName}>
export const useUserName = () => {
  return useContext(UserNameContext);
};

//HOOK #2 - useUpdateUserName
//extract the method setUserName using useContext and the UpdateUserNameContext
export const useUpdateUserName = () => {
  return useContext(UpdateUserNameContext);
};




