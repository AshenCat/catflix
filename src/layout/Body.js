import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/landing/Landing'
// import Login from './pages/Login'
// import Home from './pages/Home'
// import Register from './pages/Register'
// import Profile from './pages/Profile'

export default function Body(props) {
    const Login = React.lazy(()=>import('./pages/login/Login'))
    const Register = React.lazy(()=>import('./pages/register/Register'))
    const Profile = React.lazy(()=>import('./pages/profile/Profile'))
    const Dashboard = React.lazy(()=>import('./pages/dashboard/Dashboard'))
    const Home = React.lazy(()=>import('./pages/Home'))
    const Upload = React.lazy(()=>import('./pages/upload/Upload'))
    return (
        <main style={{flex: 1}}>
            <Route exact path="/" component={Landing} />
            <React.Suspense fallback={<p>Loading...</p>}>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/Profile' component={Profile} />
                <Route exact path='/Dashboard' component={Dashboard} />
                <Route exact path='/Upload' component={Upload} />
            </React.Suspense>
        </main>
    )
}
