import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon  from '@material-ui/icons/Menu'

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
