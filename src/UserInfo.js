import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  Row,
} from 'react-bootstrap';

// local components
import FacebookSignIn from './FacebookSignIn';
import GoogleSignIn from './GoogleSignIn';

// actions
import { fetchUser } from './redux/actions/actions';

// css
import './UserInfo.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('quoteId')) {
      const quoteId = urlParams.get('quoteId');
      this.props.fetchUser(quoteId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.username !== this.props.username) {
      const { username, firstName, lastName, email } = nextProps.user;
      this.setState({
        username,
        firstName,
        lastName,
        email,
      });
    }
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  fieldGroup({ id, label, ...props }) {
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          {label}:
        </Col>
        <Col componentClass={ControlLabel} sm={10}>
          <FormControl {...props} />
        </Col>
      </FormGroup>
    );
  }

  signInWithSocial(socialSignInLink) {
    this.props.signInWithSocial(socialSignInLink);
  }

  render() {
    console.log('quote: ', this.props.quote)
    console.log('state: ', this.state);
    return (
      <Grid>
        <Row>
          <Col>
            <Form horizontal>
              <fieldset>
                <legend>User Info</legend>
                {this.fieldGroup({
                  id: '',
                  label: 'First Name',
                  value: this.state.firstName,
                  type: 'text',
                  name: 'firstName',
                  placeholder: 'Enter your First Name',
                  onChange: this.handleChange
                })}
                {this.fieldGroup({
                  id: '',
                  label: 'Last Name',
                  value: this.state.lastName,
                  type: 'text',
                  name: 'lastName',
                  placeholder: 'Enter your Last Name',
                  onChange: this.handleChange
                })}
                {this.fieldGroup({
                  id: '',
                  label: 'Username',
                  value: this.state.username,
                  type: 'text',
                  name: 'username',
                  placeholder: 'Enter your Username',
                  onChange: this.handleChange
                })}
                {this.fieldGroup({
                  id: '',
                  label: 'Email',
                  value: this.state.email,
                  type: 'email',
                  name: 'email',
                  placeholder: 'Enter your Email Address',
                  onChange: this.handleChange
                })}
                <Button bsStyle="info">Next</Button>
              </fieldset>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col smOffset={3} sm={6}>
            <p>
              Optionally signup with either Facebook or Google to pre-populate the fields
            </p>
            <Col sm={2.5}>
              <FacebookSignIn quoteId={this.props.quote.id} />
            </Col>
            <hr />
            <Col sm={2.5}>
              <GoogleSignIn quoteId={this.props.quote.id} />
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}

// These props come from the application's state when it is started
function mapStateToProps(state) {
  return {
    errorMessage: state.quotes.error,
    quote: state.quotes.quote,
    status: state.quotes.fetching,
    user: state.quotes.user,
  };
}

export default connect(mapStateToProps, { fetchUser })(UserInfo);
