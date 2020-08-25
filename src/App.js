import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  state = { 
    user: null,

  }

  login = (username, password) => {
    this.setState({user:""})
    console.log("login")
  }

  logout = () => {
    this.setState({user: null})
  }

  render() { 
    return ( 
      <div className="App">
        <BrowserRouter>
        <Header/>
        <Body login={this.login} />
        <Footer/>
        </BrowserRouter>
      </div>
     );
  }
}
 
export default App;
