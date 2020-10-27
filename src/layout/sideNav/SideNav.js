import { Typography } from '@material-ui/core'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./SideNav.css"

function SideNav(props) {
    return (
        <>
            <div id="sidenav" 
                className={`${props.open ? 'backdrop bkd-open' : null }`}
                onClick={()=>props.setSideNav(false)}/>
            <nav id="sideNav" className={`${props.open ? 'sidenav open' : 'sidenav close'}`}>
                <Typography variant="h4">Navigation</Typography>
                <Typography variant="h5" className="nav-item" noWrap><Link to="/" className="link">Home</Link></Typography>
                <Typography variant="h5" className="nav-item" noWrap><Link to="/" className="link">Dashboard</Link></Typography>
                <Typography variant="h5" className="nav-item" noWrap><Link to="/" className="link">Profile</Link></Typography>
                <Typography variant="h5" className="nav-item" noWrap><Link to="/" className="link">About</Link></Typography>
                <Typography variant="h5" className="nav-item" noWrap><Link to="/" className="link">Terms of use</Link></Typography>
            </nav>
        </>
    )
}

export default withRouter(SideNav)
