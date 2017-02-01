import React from 'react';
import {
  Button,
} from 'react-bootstrap';

// constants
import { API_URL } from './redux/actions/index';

class FacebookSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const FacebookSignInLink = 'login/facebook';
    const nextUrlOnSuccess = '/social-login-success'
    const quoteId = this.props.quoteId;
    window.location = `
      ${API_URL}/${FacebookSignInLink}/?next=${nextUrlOnSuccess}/?quoteId=${quoteId}
    `;
  }

  render() {
    return (
      <Button bsStyle="primary" onClick={this.handleClick}>
        <i className="fa fa-facebook">
        </i>
        &nbsp;
        Sign in with Facebook
      </Button>
    );
  }
}

FacebookSignIn.propTypes = {
  quoteId: React.PropTypes.string,
};

export default FacebookSignIn;
