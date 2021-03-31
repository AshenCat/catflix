import React from 'react';
import Axios from 'axios';
import target from '../helper/target';
import { useSnackbarContext } from './SnackbarContext';

const UserContext = React.createContext();

export const useUserContext = () => {
    return React.useContext(UserContext)
}

export default function UserProvider(props) {
    const [userSession, setUserSession] = React.useState(null);
    const { setOpen, setMessage } = useSnackbarContext();

    const login = (username, password, setOpenErr, setSubmitting) => {
        Axios.post(`${target}/api/user/login`, {username, password}, {withCredentials: true})
            .then((res) => {
                console.log(res.data.payload)
                if (!res.data.payload){
                    // setTimeout(()=>{
                        setOpenErr(true)
                        setSubmitting(false)
                    // }, 1000)
                }
                else setUserSession(res.data.payload);
            }).catch((err) => {
                console.log(err);
            })
    }
    
    const logout = () => {
        Axios.get(`${target}/api/user/logout`, {withCredentials: true})
            .then((res)=> {
                //Snackbar here
                // console.log(res.data)
                setMessage(res.data.msg);
                setOpen(true);
                // document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                // console.log('logging out')
                setUserSession(null)
            }).catch((err) => {
                console.log("Server Error...")
            })
    }

    const checkAuth = () => {
        Axios.post(`${target}/api/user/`, {}, {withCredentials: true})
            .then((res) => {
                // console.log("Checking user auth: ")
                // console.log(res.data)
                setUserSession(res.data)
            }).catch((err) => {
                console.log("Server Error...")
            })
    }

    return (
        <UserContext.Provider value={{login, logout, checkAuth, userSession}}>
            {props.children}
        </UserContext.Provider>
    )
}