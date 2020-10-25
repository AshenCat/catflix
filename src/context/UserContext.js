import React from 'react';
import Axios from 'axios';
import target from '../helper/target';

const UserContext = React.createContext();

export const useUserContext = () => {
    return React.useContext(UserContext)
}

export default function UserProvider(props) {
    const [userSession, setUserSession] = React.useState(null);

    const login = (username, password) => {
        Axios.post(`${target}/api/user/auth/login`, {username, password}, {withCredentials: true})
            .then((res) => {
                if (!res.data.payload) {
                    setTimeout(()=>{
                        return false
                    }, 1000)
                }
                else setUserSession(res.data.payload);
            },
            (err) => {
              console.log("Status 500");
            })
    }

    const getUserSession = () => {
        console.log("Get local user session: ")
        console.log(userSession)
        return userSession;
    }
    
    const logout = () => {
        return
    }

    const checkAuth = () => {
        Axios.post(`${target}/api/user/auth`, {}, {withCredentials: true})
            .then((res) => {
                console.log("Checking user auth: ")
                console.log(res.data)
                setUserSession(res.data)
            })
    }

    return (
        <UserContext.Provider value={{login, logout, checkAuth, getUserSession}}>
            {props.children}
        </UserContext.Provider>
    )
}