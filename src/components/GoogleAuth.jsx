import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '110724666089-dia334pg58uoafnfq87b0gckf9bntarg.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut } = this.props;
    if (isSignedIn) {
      signIn(this.auth.currentUser.get().getId());
    } else { signOut(); }
  }

  renderButton() {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return null;
    } if (isSignedIn) {
      return (
        <button className="ui red google button" type="button" onClick={() => this.auth.signOut()}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button className="ui red google button" type="button" onClick={() => this.auth.signIn()}>
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

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = {
  signIn,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);

GoogleAuth.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
};

GoogleAuth.defaultProps = {
  isSignedIn: null,
};
