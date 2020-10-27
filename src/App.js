import React from 'react';
import { useRouteMatch, withRouter } from 'react-router-dom';
import Body from './layout/Body';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { useUserContext } from './context/UserContext'
import './App.css';


const App = () => {
  const [sideNav, setSideNav] = React.useState(false)

  const match = useRouteMatch();
  const { checkAuth } = useUserContext();

  React.useEffect(()=>{
    checkAuth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match])

  return (
    <div className="App">
      <Header setSideNav={setSideNav} />
      <Body sideNav={sideNav} setSideNav={setSideNav} />
      <Footer />
    </div>
  )
}

export default withRouter(App);