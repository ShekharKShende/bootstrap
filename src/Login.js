import React, {Fragment} from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { loginUser } from '../src/actions/login'

const mapStateToProps = state => {
    return {
        status: state.login.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
     loginUser:(email, password) => dispatch(loginUser(email, password))
  }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    componentDidMount() {
        debugger;
        this.props.status.isLoggedIn = "true";
        // this.forceUpdate();
    }

 handleSubmit = (evt) =>{
        evt.preventDefault();
        const{email, password} = this.state;
        this.props.loginUser(email, password)
}

handleChange = (evt) => {
const {value, type} = evt.target;
this.setState({
    [type]:value
})
}
    render() {
        console.log('render');
        return (
        <Fragment>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
            </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
                    <div>{this.props.status.isLoggedIn}</div>
        </Form>
      </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);