import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import SideNav from './sideNav/SideNav';

export default function Body(props) {
    return (
        <main style={{flex: 1}}>
            <SideNav open={props.sideNav}  setSideNav={props.setSideNav} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Profile' component={Profile} />
        </main>
    )
}
