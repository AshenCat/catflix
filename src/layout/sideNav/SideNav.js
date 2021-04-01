import { Avatar, Backdrop, Grid, Typography } from '@material-ui/core'
import { DashboardRounded, DashboardTwoTone, Person } from '@material-ui/icons'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./SideNav.css"
import {useTheme} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


function SideNav(props) {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme)
    return (
        <>
            {/* <div id="sidenav" 
                className={`${props.open ? 'backdrop bkd-open' : 'backdrop' }`}
                onClick={()=>props.setSideNav(false)}/> */}
            <Backdrop open={props.open} onClick={()=>props.setSideNav(false)} className={classes.backdrop}>
            <nav id="sideNav" className={`${props.open ? 'sidenav open' : 'sidenav close'}`} style={{background:theme.palette.primary.main}}>
                <Grid container justify="center" spacing={2} style={{marginBottom: "1rem"}}>
                    <Grid container item justify="center"> 
                        <Avatar>
                            <Person fontSize="large" />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography>Your Name here</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h5" className="nav-item" noWrap>
                    <Link to="/" className="link"><Grid container alignItems="center" justify="flex-end" wrap="nowrap"> Home</Grid></Link>
                </Typography>
                <Typography variant="h5" className="nav-item" noWrap>
                    <Link to="/" className="link"><Grid container alignItems="center" justify="flex-end" wrap="nowrap"><DashboardRounded />Dashboard</Grid></Link>
                </Typography>
                <Typography variant="h5" className="nav-item" noWrap>
                    <Link to="/" className="link"><Grid container alignItems="center" justify="flex-end" wrap="nowrap">Subscriptions</Grid></Link>
                </Typography>
                <Typography variant="h5" className="nav-item" noWrap>
                    <Link to="/" className="link"><Grid container alignItems="center" justify="flex-end" wrap="nowrap"><DashboardTwoTone />Account</Grid></Link>
                </Typography>
                <Typography variant="h5" className="nav-item" noWrap>
                    <Link to="/" className="link"><Grid container alignItems="center" justify="flex-end" wrap="nowrap"><DashboardTwoTone />Help</Grid></Link>
                </Typography>
            </nav>
            </Backdrop>
            
        </>
    )
}

export default withRouter(SideNav)
