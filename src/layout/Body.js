import React from 'react';
import { Route } from 'react-router-dom';
// import Login from './pages/Login'
import Home from './pages/Home'
// import Register from './pages/Register'
// import Profile from './pages/Profile'

export default function Body(props) {
    const Login = React.lazy(()=>import('./pages/login/Login'))
    const Register = React.lazy(()=>import('./pages/Register'))
    const Profile = React.lazy(()=>import('./pages/profile/Profile'))

    return (
        <main style={{flex: 1}}>
            <Route exact path='/Home' component={Home} />
            <React.Suspense fallback={<p>Loading...</p>}>
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/Profile' component={Profile} />
            </React.Suspense>
        </main>
    )
}
