import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
    const host = "http://localhost:5000"
    const userInitial = []
    const [user, setUser] = useState({})
    //Get user
    const getUser = async () => {
        //todo api call
        //API call
        const url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmJiMjc0ODQ1NWY5ZGNhMzEwM2E2In0sImlhdCI6MTYzNjgxMDUzM30.KKfqrMy7a0xu-prK9azlDZgebv-3ddU9yIva6hKEBwg'
            },
          });
          const json = await response.json();
          // console.log(json);
          setUser(json)
    }
    return (
        <UserContext.Provider value={{getUser, user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;