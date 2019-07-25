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
        loginUser: (email, password) => dispatch(loginUser(email, password))
    }
}
// eslint-disable-next-line
const emailRegex = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");
const formValid = formErr => {
    let valid = true;
    Object.values(formErr).forEach(value => {
        value.length > 0 && (valid = false)
    })
    return valid;
}

class Login extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: null,
                password: null,
                formErr: {
                    email: "",
                    password: ""
                }
            }
        }

        handleSubmit = (evt) => {
            evt.preventDefault();
            const {
                email,
                password,
                formErr
            } = this.state;
            if (!formValid(formErr)) {
                this.props.loginUser(email, password)
            }
        }

        handleChange = (evt) => {
            const {
                formErr
            } = this.state;
            const {
                value,
                type
            } = evt.target;
            switch (type) {
                case 'email':
                    formErr[type] = emailRegex.test(value) ? "" : "Invalid Email";
                    break;
                case 'password':
                    formErr[type] = value.length < 2 ? "password is not valid" : "";
                    break;
                default:
                    break;
            }
            this.setState({
                formErr,
                [type]: value
            })
        }
    render() {
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit} className="login">
                    <Form.Group controlId="formBasicEmail" noValidate >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control noValidate onChange={this.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  required onChange={(e)=>this.handleChange(e)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);