import React from 'react';
import { useRouteMatch, withRouter } from 'react-router-dom';
import Body from './layout/Body';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import { useUserContext } from './context/UserContext'
import './App.css';
import { CustomMuiTheme } from './style/CustomMuiTheme';
import { ThemeProvider } from '@material-ui/core'
import SideNavProvider from './context/SideNavContext';


const App = () => {

  const match = useRouteMatch();
  const { checkAuth } = useUserContext();

  React.useEffect(()=>{
    checkAuth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match])

  return (
    <div className="App">
      <ThemeProvider theme={CustomMuiTheme}>
        <SideNavProvider>
          <Header />
          <Body />
          <Footer />
        </SideNavProvider>
      </ThemeProvider>
    </div>
  )
}

export default withRouter(App);