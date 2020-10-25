import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography, Menu, MenuItem, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu'
import AccountCircle  from '@material-ui/icons/AccountCircle'
import { withRouter, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const goTo = (where) => {
        props.history.push(where)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        <Link to={props.session? "/Dashboard" : "/Home"} style={{"textDecoration": "none", "color": "inherit"}}>Catflix</Link>
                    </Typography>
                    {props.session ? 
                        <div>
                            <IconButton
                                id="popup"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">
                                <Typography className={classes.menuButton}>
                                    {props.session.username}
                                </Typography>
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
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
                                <MenuItem onClick={()=>{handleClose(); props.logout();}}>Logout</MenuItem> 
                            </Menu>
                        </div>
                         :
                    <div>
                        <ButtonGroup disableElevation variant="outlined" color="inherit">
                            <Button onClick={()=>goTo('/Login')}>Login</Button>
                            <Button onClick={()=>goTo('/Register')}>Register</Button>
                        </ButtonGroup>
                    </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Header)