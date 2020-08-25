import React from 'react';
import { Grid, TextField, Container, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
// }));

function Login(props) {
    const [username, setUsername] = React.useState("");
    const [usernameErr, setUsernameErr] = React.useState(false);
    const [passwordErr, setPasswordErr] = React.useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        if (username.length > 18 || username.length < 6) {
            setUsernameErr(true)
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Container className="form">
                        <form noValidate onSubmit={onSubmit}>
                            <div>
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
                                    label="Password"
                                    type="password"
                                    required />
                            </div>
                            <div>
                            <Button type="submit" className="centered mt-20" variant="contained" size="large" color="primary">Login</Button>
                            </div>
                        </form>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login