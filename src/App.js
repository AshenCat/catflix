import React from 'react';
import {
  withRouter 
} from 'react-router-dom';
import Body from './layout/Body';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import './App.scss';
import { CustomMuiTheme } from './style/CustomMuiTheme';
import { ThemeProvider } from '@material-ui/core'
import SideNavProvider from './context/sidenav/SideNavContext';


const App = () => {
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

export default App;