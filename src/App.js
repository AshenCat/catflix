import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios'
import target from './components/helper/target'
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export const SessionContext = React.createContext();

class App extends React.Component {
  state = {
    session: null
  }

  componentDidMount() {
    Axios.post(`${target}/api/user/auth`, {}, {withCredentials: true})
      .then((res) => {
        this.setState({session: res.data})
      })
  }

  login = (username, password) => {
    Axios.post(`${target}/api/user/login`, {username, password}, {withCredentials: true})
      .then((res) => {
        if (res.data.payload) {
          this.setState({session: res.data.payload})
          this.props.history.push('/Home')
          return true;
        }
        else return false;
      },
      (err) => {
        console.log("status 500")
      })
  }

  logout = () => {
    this.setState({session: null})
  }

  render() { 
    return ( 
      <div className="App">
        <Header logout={this.logout} session={this.state.session}/>
        <SessionContext.Provider value={this.state.session}>
          <Body login={this.login} />
        </SessionContext.Provider>
        <Footer/>
      </div>
     );
  }
}
 
export default withRouter(App);
