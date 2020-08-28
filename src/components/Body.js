import React from 'react';
import { Route } from 'react-router-dom';
import Login from './body/Login'
import Dashboard from './body/Dashboard'
import Register from './body/Register'

export default function Body(props) {
    return (
        <div>
            <Route exact path='/Login' component={() => <Login login={props.login} />} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Register' component={Register} />
        </div>
    )
}
