import React from 'react';
import { Avatar, Backdrop, Grid, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import "./SideNav.scss";
// import {useTheme} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const sideNavContext = React.createContext();

export const useSideNavContext = () => {
    return React.useContext(sideNavContext);
}

function SideNavProvider(props) {
    const [openSideNav, setOpenSideNav] = React.useState(false)

    const classes = useStyles();
    // const theme = useTheme();
    // console.log(theme.zIndex)
    return (
        <sideNavContext.Provider value={{openSideNav, setOpenSideNav}}>
            {props.children}
            <Backdrop open={openSideNav} onClick={()=>setOpenSideNav(false)} className={classes.backdrop}>
            </Backdrop>
            <nav id="sideNav" className={`${openSideNav ? 'sidenav sideNav-open' : 'sidenav sideNav-close'}`} 
            // style={{background:theme.palette.primary.main}}
            >
                <Grid container justify="center" spacing={2} style={{marginBottom: "1rem"}}>
                    <Grid container item justify="center"> 
                        <Avatar>
                            <Person fontSize="large" />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography className="sideNav-username">Your Name here</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h5" className="sideNav-nav-item" noWrap>
                    <Link to="/home" className="sideNav-link" onClick={()=>setOpenSideNav(false)}>
                        <Grid container alignItems="center" justify="flex-end" wrap="nowrap">
                        Home
                    </Grid>
                    </Link>
                </Typography>
                <Typography variant="h5" className="sideNav-nav-item" noWrap>
                    <Link to="/dashboard" className="sideNav-link" onClick={()=>setOpenSideNav(false)}>
                        <Grid container alignItems="center" justify="flex-end" wrap="nowrap">
                            
                            Dashboard
                        </Grid>
                    </Link>
                </Typography>
                <Typography variant="h5" className="sideNav-nav-item" noWrap>
                    <Link to="/subscriptions" className="sideNav-link" onClick={()=>setOpenSideNav(false)}>
                        <Grid container alignItems="center" justify="flex-end" wrap="nowrap">
                            Subscriptions
                        </Grid>
                    </Link>
                </Typography>
                <Typography variant="h5" className="sideNav-nav-item" noWrap>
                    <Link to="/account" className="sideNav-link" onClick={()=>setOpenSideNav(false)}>
                        <Grid container alignItems="center" justify="flex-end" wrap="nowrap">
                            Account
                        </Grid>
                    </Link>
                </Typography>
                <Typography variant="h5" className="sideNav-nav-item" noWrap>
                    <Link to="/help" className="sideNav-link" onClick={()=>setOpenSideNav(false)}>
                        <Grid container alignItems="center" justify="flex-end" wrap="nowrap">
                            Help
                        </Grid>
                    </Link>
                </Typography>
            </nav>
        </sideNavContext.Provider>
    )
}

export default SideNavProvider
