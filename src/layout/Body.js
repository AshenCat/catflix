import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function Body(props) {
    return (
        <div>
            <Route exact path='/Login' component={() => <Login login={props.login} session={props.session}/>} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Profile' component={() => <Profile session={props.session}/>} />
        </div>
    )
}
