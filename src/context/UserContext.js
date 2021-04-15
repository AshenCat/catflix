import React from 'react';
import Axios from 'axios';
import target from '../helper/target';
import { useSnackbarContext } from './SnackbarContext';
import { withRouter } from 'react-router';

const UserContext = React.createContext();

export const useUserContext = () => {
    return React.useContext(UserContext)
}

function UserProvider(props) {
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
                else {
                    setUserSession(res.data.payload);
                }
            }).catch((err) => {
                console.log(err);
            })
    }
    
    const logout = () => {
        Axios.get(`${target}/api/user/logout`, {withCredentials: true})
            .then((res)=> {
                //Snackbar here
                // console.log(res.data)
                // document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                // console.log('logging out')
                setUserSession(null)
                setMessage("You have logged out")
                setOpen(true)
                setTimeout(()=>props.history.push('/'), 50)
            }).catch((err) => {
                console.log("Server Error...")
            })
    }

    const checkAuth = () => {
        Axios.post(`${target}/api/user/`, {}, {withCredentials: true})
            .then((res) => {
                console.log("Checking user auth: " + res.data.authenticated)
                // console.log(res.data)
                if(!res.data.authenticated) {
                    setUserSession(null);
                    setMessage("User session expired");
                    setOpen(true);
                    props.history.push('/')
                }
                else setUserSession(res.data);
            }).catch((err) => {
                console.log("Server Error...")
                console.log(err)
            })
    }

    return (
        <UserContext.Provider value={{login, logout, checkAuth, userSession}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default withRouter(UserProvider);