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
            }).catch((err) => {
                console.log("Server Error...");
            })
    }

    const getUserSession = () => {
        console.log("Get local user session: ")
        console.log(userSession)
        return userSession;
    }
    
    const logout = () => {
        Axios.post(`${target}/api/logout`, {withCredentials: true})
            .then((res)=> {
                //Snackbar here
            }).catch((err) => {
                console.log("Server Error...")
            })
    }

    const checkAuth = () => {
        Axios.post(`${target}/api/user/`, {}, {withCredentials: true})
            .then((res) => {
                console.log("Checking user auth: ")
                console.log(res.data)
                setUserSession(res.data)
            }).catch((err) => {
                console.log("Server Error...")
            })
    }

    return (
        <UserContext.Provider value={{login, logout, checkAuth, getUserSession}}>
            {props.children}
        </UserContext.Provider>
    )
}