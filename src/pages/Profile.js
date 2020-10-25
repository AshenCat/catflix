import React from 'react'
import { Grid, Container, Paper, makeStyles, Avatar, Typography } from '@material-ui/core'
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    Paper: {
        marginTop: "2rem",
    },
    top: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
    },
    MajorAvatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    textSm : {
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
}))


function Profile(props) {
    const classes = useStyles();
    console.log(props.session)
    return (
        <Container>
            <Paper className={classes.Paper}>
                <Grid container className={classes.top}>
                    <Grid item sm={3} xs={12}>
                        <Grid container justify="center">
                            <Avatar alt={props.session ? props.session.Avatar : null} src="http://localhost:7172/api/media" className={classes.MajorAvatar}/>
                        </Grid>
                    </Grid>
                    <Grid item sm={9} xs={12}>
                        <br />
                        <Typography variant="h4" className={classes.textSm}>{props.session ? props.session.username : null}</Typography>
                        <i><Typography variant="subtitle1" className={classes.textSm}>&#8212; {props.session ? props.session.quote : null}</Typography></i>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default withRouter(Profile);
