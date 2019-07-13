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
      });
    });
  }

  renderButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return <div>Not sure if signed in!</div>;
    } if (isSignedIn) {
      return <div>Signed in!</div>;
    }
    return <div>Signed out!</div>;
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
