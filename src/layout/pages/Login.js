import React from 'react';
import { Grid, TextField, Container, Button, Paper, Typography, Collapse, IconButton, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext'
import Alert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    marginTop: {
      marginTop: '2rem',
    },
    gridBorderLeft: {
        borderLeft: '1px solid lightgray',
        margin: '3rem 0',
        padding: '0 3rem'
    },
    mt20: {
        marginTop: '20px',
    }
}));

function Login(props) {
    const classes = useStyles();

    const { userSession, login } = useUserContext();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [usernameErr, setUsernameErr] = React.useState('');
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
        if (username.length > 18 || username.length < 6) {
            setUsernameErr('Validation error...')
        }
        await login(username, password, setOpen, setSubmitting);
    }

    return (
        <Container>
            <Paper>
                <Grid container className={classes.marginTop}>
                    <Grid item xs={12} sm={8} container>
                    </Grid>
                    <Grid item xs={12} sm={4} container>
                        <div className={classes.gridBorderLeft}>
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
                            <Typography variant="h4">Login</Typography>
                            <form noValidate onSubmit={onSubmit}>
                                <div className={classes.mt20}>
                                    <TextField
                                        onChange={(e)=>{setUsername(e.target.value); setUsernameErr('');}}
                                        label="Username" 
                                        value={username}
                                        error={usernameErr !== ''}
                                        helperText={usernameErr}
                                        variant="outlined"
                                        required />
                                </div>
                                <div className={classes.mt20}>
                                    <TextField
                                        variant="outlined"
                                        className="centered"
                                        onChange={(e)=>{setPassword(e.target.value); /*setPasswordErr(false);*/}}
                                        // error={passwordErr}
                                        value={password}
                                        label="Password"
                                        type="password"
                                        required />
                                </div>
                                <div>
                                    <Button 
                                        type="submit" 
                                        className={classes.mt20} 
                                        variant="contained" 
                                        size="large" 
                                        color="primary" 
                                        disabled={submitting}>
                                        {submitting ? <CircularProgress />: 'Login'}
                                    </Button>
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