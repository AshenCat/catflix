import React from 'react';
import { Route } from 'react-router-dom';
import Login from './body/Login'

export default function Body(props) {
    return (
        <div>
            <Route exact path='/login' component={() => <Login login={props.login} />} />
        </div>
    )
}
