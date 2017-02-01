import React from 'react';
import {
  Button,
} from 'react-bootstrap';

// constants
import { API_URL } from './redux/actions/index';

class GoogleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const GoogleSignInLink = 'login/google-oauth2';
    const nextUrlOnSuccess = '/social-login-success'
    const quoteId = this.props.quoteId;
    const returnUrl = window.location.href;
    window.location = `
      ${API_URL}/${GoogleSignInLink}/?returnUrl=${returnUrl}&next=${nextUrlOnSuccess}/?quoteId=${quoteId}
    `;
  }

  render() {
    return (
      <Button bsStyle="danger" onClick={this.handleClick} >
        <i className="fa fa-google">
        </i>
        &nbsp;
        Sign in with Google
      </Button>
    );
  }
}

GoogleSignIn.propTypes = {
  quoteId: React.PropTypes.string,
};

export default GoogleSignIn;
