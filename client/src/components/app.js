import React, {Component} from 'react';
import { connect } from 'react-redux';
import FbLogin from './fb_login';
import Login from '../containers/login';

export default class App extends Component {
  render() {    
    return (
      <div>
        <h1>GameHub</h1>
        <h2>slogan...</h2>
        <FbLogin />
        <Login />
      </div>
    );
  }
}