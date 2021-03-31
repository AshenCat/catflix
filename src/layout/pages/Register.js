import React from 'react'
import { TextField, Container, Button, Paper, Typography, Grid, CircularProgress, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import target from '../../helper/target';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    marginTop: {
      marginTop: '2rem',
    },
    gridBorderRight: {
        borderRight: '1px solid lightgray',
        margin: '3rem 0',
        padding: '0 3rem'
    }
}));
function Register(props) {
    const classes = useStyles();

    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password1, setPassword1] = React.useState("");
    const [usernameErr, setUsernameErr] = React.useState(false);
    const [passwordErr, setPasswordErr] = React.useState(false);
    const [passwordErr1, setPasswordErr1] = React.useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // setTimeout(()=>{
            Axios.put(`${target}/api/user`, {username, password}, {withCredentials: true})
            .then((res) => {
                console.log(res.data)
                setSubmitting(false);
                if (password !== password1){
                    setPasswordErr1(true);
                }
                if (res.data.payload === 'username'){
                    setUsernameErr(true);
                }
                else if (res.data.payload === 'password'){
                    setPasswordErr(true);
                }
                else {
                    setDialogOpen(true)
                }
            })
        // }, 500)
    }

    return (
        <Container>
            <Paper className={classes.marginTop}>
                <Grid container>
                    <Grid container item xs={12} sm={4} className={classes.gridBorderRight}>
                        <Typography variant="h4">Register</Typography>
                        <form noValidate onSubmit={onSubmit}>
                            <div className="mt-20">
                                <TextField
                                    onChange={(e)=>{setUsername(e.target.value); setUsernameErr(false);}}
                                    label="Username" 
                                    value={username}
                                    error={usernameErr}
                                    helperText={usernameErr ? "min: 6 and max: 18" : ""}
                                    variant="outlined"
                                    required />
                            </div>
                            <div className="mt-20">
                                <TextField
                                    variant="outlined"
                                    className="centered"
                                    onChange={(e)=>{setPassword(e.target.value); setPasswordErr(false);}}
                                    error={passwordErr}
                                    value={password}
                                    helperText={passwordErr ? "min: 6 and max: 18" : ""}
                                    label="Password"
                                    type="password"
                                    required />
                            </div>
                            <div className="mt-20">
                                <TextField
                                    variant="outlined"
                                    className="centered"
                                    onChange={(e)=>{setPassword1(e.target.value); setPasswordErr1(false);}}
                                    error={passwordErr1}
                                    value={password1}
                                    helperText={passwordErr1 ? "Password doesn't match" : ""}
                                    label="Re-type password"
                                    type="password"
                                    required />
                            </div>
                            <div>
                                <Button type="submit" className="centered mt-20" variant="contained" size="large" color="primary" disabled={submitting}>
                                    {submitting ? <CircularProgress color="inherit"/> : "Register"}
                                </Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid container item xs={12} sm={8}>
                    </Grid>             
                </Grid>
            </Paper>
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
        </Container>
    )
}

export default withRouter(Register)
