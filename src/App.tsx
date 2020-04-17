import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Login } from './Login'
import { Main } from './Main'
import { proxy } from './Proxy';
export default class App extends Component<{}, {signedIn: boolean}>
{
  state = {signedIn: false};
  constructor(props) {
    super(props);
    proxy.addEventListener("login", this.login);
  }
  render()
  {
    return (
    <div className="App">
       {this.state.signedIn ? <Main/> : <Login />}
    </div>
    );
  }
  login = () => {
    this.setState({signedIn: true});
  }
}