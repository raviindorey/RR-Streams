import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '110724666089-dia334pg58uoafnfq87b0gckf9bntarg.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderButton() {
    const { isSignedIn } = this.state;

    if (isSignedIn === null) {
      return null;
    } if (isSignedIn) {
      return (
        <button className="ui red google button" type="button" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button className="ui red google button" type="button" onClick={this.onSignIn}>
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    );
  }
}

export default GoogleAuth;
