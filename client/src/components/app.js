import React, {Component} from 'react';
import { connect } from 'react-redux';
import FbLogin from '../containers/fb_login';
import { Link } from 'react-router';
// import Login from '../containers/login';

export default class App extends Component {
  constructor(props) {
    // Added constructor
    super(props);
  }
  render() {    
    return (
      <div>
        <h1>GameHub</h1>
        <h2>slogan...</h2>
        <FbLogin />
        Test, 1,2
        {this.props.children}
        <Link to="/profile_setup">ProfileSetupp!!!</Link>
      </div>
    );
  }
}