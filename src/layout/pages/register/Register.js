import React from 'react'
import { TextField,  Button, Paper, Typography,  CircularProgress, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import target from '../../../helper/target';
import { withRouter } from 'react-router-dom';
import "./register.scss"

export const RegisterUsernameValidation = (username) => {
    const regExUsername = /^[a-zA-Z0-9_]{6,18}$/;
    return regExUsername.test(username.trim());
}

export const RegisterPasswordValidation = (password) => {
    const regExPassword = /[^\s\\/'"[{\]}()*<>;]{6,18}/;
    return regExPassword.test(password.trim());
}

export const RegisterEmailValidation = (email) => {
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExEmail.test(email);
}

function Register(props) {
    // const classes = useStyles();

    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password1, setPassword1] = React.useState("");
    const [usernameErr, setUsernameErr] = React.useState(false);
    const [emailErr, setEmailErr] = React.useState(false);
    const [passwordErr, setPasswordErr] = React.useState(false);
    const [passwordErr1, setPasswordErr1] = React.useState(false);
    
    const RegisterValidation = () => {
        let valid = true;
        if(!RegisterUsernameValidation(username)) {
            setUsernameErr(true);
            valid = false;
        }
        if(!RegisterPasswordValidation(password)) {
            setPasswordErr(true);
            valid = false;
        }
        if(!RegisterEmailValidation(email)) {
            setEmailErr(true);
            valid = false
        }
        if(password !== password1) {
            setPasswordErr1(true);
            valid = false;
        }
        
        return valid;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (RegisterValidation()) {
            setSubmitting(true);
            // setTimeout(()=>{
                Axios.put(`${target}/api/user`, {username, password, email}, {withCredentials: true})
                .then((res) => {
                    console.log(res.data)
                    setSubmitting(false);
                    setDialogOpen(true)
                })
            // }, 9000)
        }
    }

    const moveToSignUp = () => {
        props.history.push('/login');
    }

    return (
        <Paper className="register-paper">
            <div className="register-cards-container">
                <div className="register-swiper-card">
                    <div className="register-title-container">
                        <Typography align="center" variant="h4" className="register-swiper-text">
                            Hola, friend!
                        </Typography>
                    </div>
                    <div className="register-swiper-text" style={{marginTop: 'auto'}}>
                        <Typography>
                            Create an account to start your jouney with us
                        </Typography>
                    </div>
                    <div className="register-swiper-text" style={{marginTop: 'auto'}}>
                        <Typography>
                            <small>Already have an account?</small>
                        </Typography>
                    </div>
                    <div className="register-button-container">
                            <Button 
                                className="register-signup-button" 
                                variant="contained" 
                                size="large"
                                onClick={moveToSignUp}>
                                Sign Up
                            </Button>
                        </div>
                </div>
                <div className="register-form-card">
                    <div className="register-title-container" align="center">
                        <Typography variant="h4">
                            Register
                        </Typography>
                    </div>
                    <div className="register-form-textfield-container" style={{marginTop: '1rem'}}>
                        <TextField
                            className="register-form-textfield"
                            onChange={(e)=>{setUsername(e.target.value); setUsernameErr(false);}}
                            label="Username" 
                            size="small"
                            value={username}
                            error={usernameErr}
                            helperText={usernameErr ? "6-18 characters; can contain _" : ""}
                            required />
                    </div>
                    <div className="register-form-textfield-container">
                        <TextField
                            className="register-form-textfield"
                            onChange={(e)=>{setEmail(e.target.value); setEmailErr(false);}}
                            label="Email" 
                            size="small"
                            value={email}
                            error={emailErr}
                            helperText={emailErr ? "this doesn't look like an email" : ""}
                            required />
                    </div>
                    <div className="register-form-textfield-container">
                        <TextField
                            size="small"
                            className="register-form-textfield"
                            onChange={(e)=>{setPassword(e.target.value); setPasswordErr(false);}}
                            error={passwordErr}
                            value={password}
                            helperText={passwordErr ? "6-18 characters; cant contain \\/'\"[{\\]}()*<>;" : ""}
                            label="Password"
                            type="password"
                            required />
                    </div>
                    <div className="register-form-textfield-container">
                        <TextField
                            className="register-form-textfield"
                            size="small"
                            onChange={(e)=>{setPassword1(e.target.value); setPasswordErr1(false);}}
                            error={passwordErr1}
                            value={password1}
                            helperText={passwordErr1 ? "Password doesn't match" : ""}
                            label="Re-type password"
                            type="password"
                            required />
                    </div>
                    <div className="register-button-container">
                        <Button 
                            className="register-form-submit-button" 
                            variant="contained" 
                            size="large"
                            onClick={onSubmit}
                            disabled={submitting}>
                            {submitting ? <CircularProgress /> : "Sign Up"}
                        </Button>
                    </div>
                </div>
            </div>
            <Dialog
                open={dialogOpen}
                onClose={()=> {setDialogOpen(false)}}>
                <DialogTitle>Success!</DialogTitle>
                <DialogContent>
                    <DialogContentText>User <i><b>{username}</b></i> successfully created!</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>props.history.push('/Login')}>Go to login</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}

export default withRouter(Register)