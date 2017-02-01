import React from 'react';
import {
  Button,
  Col,
  Grid,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import { createQuote } from './redux/actions/actions';

class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createQuote(this.state.value);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col smOffset={3} sm={6}>
            <Form horizontal>
              <FormGroup controlId="zipcode">
                <Col componentClass={ControlLabel} sm={2}>
                  Zipcode
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Zipcode"
                    onChange={this.handleChange}
                  >
                  </FormControl>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={this.handleSubmit}>
                    Start
                  </Button>
                </Col>
              </FormGroup>
            </Form>
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
    status: state.quotes.fetching,
  };
}

export default connect(mapStateToProps, { createQuote })(Zipcode);
