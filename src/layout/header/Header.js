import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import AccountCircle  from '@material-ui/icons/AccountCircle';
import "./header.scss";
import { withRouter, Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { useSideNavContext } from '../../context/sidenav/SideNavContext';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    // },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
      flexGrow: 1,
    },
  }));

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const {userSession, logout} = useUserContext();
    const {setOpenSideNav} = useSideNavContext();

    const goTo = (where) => {
        props.history.push(where)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openSideNav = () => {
        if(userSession) setOpenSideNav(true);
        else props.history.push('/')
    }

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    {userSession ? 
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={openSideNav}>
                        <MenuIcon />
                    </IconButton> : null}
                    <Typography 
                        variant="h6" 
                        className={classes.title}
                        >
                        <span onClick={openSideNav} className="header-app-title">Catflix</span>
                    </Typography>
                    {userSession ? 
                        <>
                            <Typography className="header-username"
                                onClick={handleMenu}>
                                {userSession.username}
                            </Typography>
                            <IconButton
                                id="popup"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}>
                                <MenuItem onClick={handleClose} component={Link} to="/Account">My account</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/Profile">Profile</MenuItem>
                                <MenuItem onClick={()=>{handleClose(); logout();}}>Logout</MenuItem> 
                            </Menu>
                        </>
                         :
                    <>
                        <Button onClick={()=>goTo('/Login')} className="header-button-base">Login</Button>
                        <Button onClick={()=>goTo('/Register')} variant="contained" className="header-button-contained">Register</Button>
                    </>
                    }
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default withRouter(Header)