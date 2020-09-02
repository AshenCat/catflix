import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios'
import target from './components/helper/target'
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

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

  login = (session) => {
    this.setState({session})
  }

  logout = () => {
    Axios.post(`${target}/api/user/auth/logout`, {}, {withCredentials: true})
    .then((res) => {
      this.setState({session: null})
      this.props.history.push('/Login')
    })
  }

  render() { 
    return ( 
      <div className="App">
        <Header logout={this.logout} session={this.state.session}/>
        <Body login={this.login} session={this.state.session} />
        <Footer/>
      </div>
     );
  }
}
 
export default withRouter(App);
