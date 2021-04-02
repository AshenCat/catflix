import React from 'react'
import { Grid, Paper, makeStyles, Avatar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core'
import {withRouter} from 'react-router-dom'
import './profile.scss';
import { useUserContext } from '../../../context/UserContext';
import MessageIcon from '@material-ui/icons/Message';
import { GroupAdd, PersonAdd } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    MajorAvatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}))

const override = createMuiTheme({
    overrides :{
        MuiTypography: {
            subtitle1: {
                lineHeight: 'unset'
            }
        }
    }
})

function Profile(props) {
    const classes = useStyles();
    const {userSession} = useUserContext();

    // React.useEffect(()=>{
    //     console.log(userSession)
    //     if (!userSession) {
    //         props.history.push('/')
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className="profile-margin-on-sm h-100">
            <Paper className={classes.Paper}>
                <Grid container direction="row" className="">

                    {/* User Section */}

                    <Grid container item xs={12} sm={6} justify="space-around" className="profile-user">
                            <div className="w-100 profile-avatar-container">
                                <Avatar alt={userSession ? userSession.Avatar : null} 
                                // imgProps={{className:`${classes.MajorAvatar} profile-avatar`}} 
                                // src="http://localhost:7172/api/static/Avatar1.svg" 
                                className={`${classes.MajorAvatar} profile-avatar`}/>
                            </div>
                            <div>
                                <Typography variant="h4" align="center" className="profile-user-name w-100">{userSession ? userSession.username : null}</Typography>
                                <ThemeProvider theme={override}>
                                    <Typography variant="subtitle1" align="center" className="profile-user-quote">
                                        {/* &#8212; {userSession ? userSession.quote : null} */}
                                        <small><i>Filet mignon jerky pancetta capicola strip steak corned beef leberkas. </i></small>
                                    </Typography>
                                </ThemeProvider>
                            </div>
                        <Grid container item justify="center" xs={12}>
                            <div className="profile-icon-container">
                                <MessageIcon className="profile-icon"/>
                            </div>
                            <div className="profile-icon-container">
                            <PersonAdd className="profile-icon"/>
                            </div>
                            <div className="profile-icon-container">
                            <GroupAdd className="profile-icon"/>
                            </div>
                        </Grid>
                    </Grid>
                    {/* Comments Section */}
                    <Grid item xs={12} sm={6} className="profile-comment-list-container">
                        <Typography variant="h4" align="center">Comments</Typography>
                        {[...new Array(3)].map((dummy, index) => 
                            <Grid key={index} container justify="space-around" className="profile-comment-container">
                                <Grid container alignItems="center" item>
                                    <Grid container direction="row" alignItems="center" className="profile-comment-parent-container">
                                        <div className="profile-comment-parent-arrow">&nbsp;</div>
                                        <Avatar className="profile-comment-parent-avatar">
                                        </Avatar>
                                        <a href="#n" className="profile-comment-parent-name"><b>@Igurson</b></a>
                                        <a href="#a" className="profile-comment-parent-text">
                                            Filet mignon jerky pancetta capicola strip steak corned beef leberkas. 
                                            Leberkas tongue frankfurter, shankle fatback kielbasa pork belly sirloin ham hock alcatra spare ribs. 
                                            Doner chislic alcatra ham pork, ham hock salami drumstick kevin biltong tongue short ribs. 
                                            Sausage andouille cow pork.
                                        </a>
                                    </Grid>
                                    <div className="profile-comment-user-container">
                                        <Avatar className="profile-comment-user-avatar"/>
                                        <Typography variant="h6">Kweebvin</Typography>
                                        <Typography variant="subtitle1">
                                            Filet mignon jerky pancetta capicola strip steak corned beef leberkas. 
                                            Leberkas tongue frankfurter, shankle fatback kielbasa pork belly sirloin ham hock alcatra spare ribs. 
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        ) }
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default withRouter(Profile);
