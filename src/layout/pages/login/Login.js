import React from 'react';
import { TextField,  Button, Paper, Typography, Collapse, IconButton, CircularProgress } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext'
import Alert from '@material-ui/lab/Alert';
import { Close } from '@material-ui/icons';
import "./login.scss"


export const loginUsernameValidation = (username) => {
    // const regEx = /([^\s*])*([a-zA-Z0-9_])/;
    const regEx = /[a-zA-Z0-9_]{6,18}/;
   return regEx.test(username.trim());
}

export const loginPasswordValidation = (password) => {
    return password.trim().length > 0;
}

function Login(props) {

    const { userSession, login } = useUserContext();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submitting, setSubmitting] = React.useState(false);
    
    const [open, setOpen] = React.useState(false);
    // const [passwordErr, setPasswordErr] = React.useState(false);

    React.useEffect(()=> {
        if (userSession !== null) props.history.push('/Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userSession])

    const onSubmit = async (e) => {
        setSubmitting(true)
        e.preventDefault();
        if (!loginUsernameValidation(username) && !loginPasswordValidation(password)) {
            console.log('yes')
            setOpen(true);
            setSubmitting(false)
            return;
        }
        else {
            await login(username, password, setOpen, setSubmitting);
        }
    }

    const moveToRegister = () => {
        props.history.push('register')
    }

    return (
        <Paper className="login-paper-container">
            <div className="login-swiping-cards-container">
                <div className="login-form-container">
                    <div className="login-title-container">
                        <Typography align="center" variant="h4">
                            Login
                        </Typography>
                    </div>
                    <div className="login-notif">
                        <Collapse in={open}>
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                          setOpen(false);
                                        }}>
                                      <Close fontSize="inherit" />
                                    </IconButton>
                                }>
                              Failed to login
                            </Alert>
                        </Collapse> 
                    </div>
                    <div className="login-textfield-container" style={{marginTop: "1rem"}}>
                        <TextField
                            className="login-form-textfield"
                            onChange={(e)=>{setUsername(e.target.value);}}
                            label="Username" 
                            size="small"
                            value={username}
                            // variant="outlined"
                            required />
                    </div>
                    <div className="login-textfield-container">
                        <TextField
                            className="login-form-textfield"
                            // variant="outlined"
                            size="small"
                            onChange={(e)=>{setPassword(e.target.value);}}
                            // error={passwordErr}
                            value={password}
                            label="Password"
                            type="password"
                            required />
                    </div>
                    <div className="login-textfield-container" >
                        <Typography className="login-forgot-password">
                            <Link className="login-forgot-password-link"><small>Forgot your password?</small></Link>
                        </Typography>
                    </div>
                    <div className="login-textfield-container login-button-container">
                        <Button 
                            className="login-form-button" 
                            onClick={onSubmit}
                            variant="contained" 
                            size="large" 
                            color="primary" 
                            disabled={submitting}>
                            {submitting ? <CircularProgress />: 'Sign In'}
                        </Button>
                    </div>
                </div>
                <div className="login-swiper">
                    <div className="login-swiper-flex">
                        <div className="login-title-container login-swiper-title">
                            <Typography align="center" variant="h4" className="login-title">
                                Welcome!
                            </Typography>
                        </div>
                        <div className="">
                            <Typography align="center" className="login-swiper-text">
                                {/* Enter your login info and start your journey with us */}
                                To keep connected with us please login with your personal info
                            </Typography>
                        </div>
                        <div className="">
                            <Typography align="center" className="login-swiper-text">
                                {/* Enter your login info and start your journey with us */}
                                <small>Don't have an account?</small>
                            </Typography>
                        </div>
                        <div className="login-textfield-container login-button-container">
                            <Button 
                                className="login-form-button" 
                                variant="contained" 
                                size="large"
                                onClick={moveToRegister}>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default withRouter(Login)

// eslint-disable-next-line no-lone-blocks
{/* 
<form noValidate onSubmit={onSubmit}>
                            <div className="">
                                <TextField
                                    onChange={(e)=>{setUsername(e.target.value); setUsernameErr('');}}
                                    label="Username" 
                                    size="small"
                                    value={username}
                                    error={usernameErr !== ''}
                                    helperText={usernameErr}
                                    variant="outlined"
                                    required />
                            </div>
                            <div className="">
                                <TextField
                                    variant="outlined"
                                    className="centered"
                                    size="small"
                                    onChange={(e)=>{setPassword(e.target.value);}
                                    // error={passwordErr}
                                    value={password}
                                    label="Password"
                                    type="password"
                                    required />
                            </div>
                            <div>
                                <Button 
                                    type="submit" 
                                    className="" 
                                    variant="contained" 
                                    size="medium" 
                                    color="primary" 
                                    disabled={submitting}>
                                    {submitting ? <CircularProgress />: 'Login'}
                                </Button>
                            </div>
                        </form> */}