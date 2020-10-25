import React from 'react';
import { Grid, TextField, Container, Button, Paper, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginTop: {
      marginTop: '2rem',
    },
    gridBorderLeft: {
        borderLeft: '1px solid lightgray',
        margin: '3rem 0',
        padding: '0 3rem'
    }
}));

function Login(props) {
    const classes = useStyles();

    const { getUserSession } = useUserContext();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [usernameErr, setUsernameErr] = React.useState(false);
    const [passwordErr, setPasswordErr] = React.useState(false);

    React.useEffect(()=> {
        if (getUserSession() !== null) props.history.push('/Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (username.length > 18 || username.length < 6) {
            setUsernameErr(true)
        }
    }

    return (
        <Container>
            <Paper>
                <Grid container className={classes.marginTop}>
                    <Grid item xs={12} sm={8} container>
                    </Grid>
                    <Grid item xs={12} sm={4} container>
                        <div className={classes.gridBorderLeft}>
                            <Typography variant="h4">Login</Typography>
                            <form noValidate onSubmit={onSubmit}>
                                <div className="mt-20">
                                    <TextField
                                        onChange={(e)=>{setUsername(e.target.value); setUsernameErr(false);}}
                                        label="Username" 
                                        value={username}
                                        error={usernameErr}
                                        helperText={usernameErr ? "Validation failed" : ""}
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
                                        label="Password"
                                        type="password"
                                        required />
                                </div>
                                <div>
                                    <Button type="submit" className="centered mt-20" variant="contained" size="large" color="primary">Login</Button>
                                </div>
                            </form>
                            </div>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default withRouter(Login)