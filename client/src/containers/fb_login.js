import React, {Component} from 'react';
import FbLogin from 'react-facebook-login';

export default class FacebookLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {loggedIn: false, accessToken: '', userEmail: ''};
    this.responseFacebook = this.responseFacebook.bind(this);
    this.stateReset = this.stateReset.bind(this);
    this.logOut = this.logOut.bind(this);
    this.cssClass = 'kep-login-facebook';
  }

  renderWithFontAwesome() {
    return (
      <div>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
         <button
            className={this.cssClass}
            onClick={this.click}>
         Log Out
        </button>

        <style dangerouslySetInnerHTML={{ __html: styles }}></style>
      </div>
    )
  }

  logOut() {
    const that = this;
    const reset = this.stateReset;
    FB.logout(function(response){
      console.log("Logged out! ");
      reset();
    });
    setTimeout(function(){
      console.log(that.state);
    }, 500);
  }

  stateReset() {
    this.setState({loggedIn: false, accessToken: '', userEmail: ''});
  }

  responseFacebook(response) {
    console.log(response);
    this.setState({accessToken: response.accessToken, userEmail: response.email});
    if (this.state.accessToken !== undefined){
      this.setState({loggedIn: true});
    }
    console.log(this.state);
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <button
              className={this.props.cssClass + ' ' + this.props.size}
              onClick={this.logOut}>
            Log Out
          </button>
        </div>
      );
    } else {
      return (
        <FbLogin
          appId="248196652218267"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook} />
      );
    }

  }
}
