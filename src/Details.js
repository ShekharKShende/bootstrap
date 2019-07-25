import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import history from './config/history';
import {
    connect
} from 'react-redux';
import {
    saveCandidate
} from './actions/login'
import getIndex from './config/util'

const mapDispatchToProps = dispatch => {
    return {
        saveCandidate: (candidate) => {
            dispatch(saveCandidate(candidate))
        }
    }
}

class Details extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                validated: false,
                candidate: {
                    id: "",
                    firstName: "",
                    lastName: "",
                    contact: "",
                    email: ""

                }

            }
            this.disabled = true;
        }
        componentDidMount() {
            if (history.location.state) {
                this.setState({
                    candidate: JSON.parse(JSON.stringify(history.location.state.candidate))
                })
            } else {
                let cand = this.state.candidate;
                cand.id = getIndex();
                this.setState({
                    candidate: cand
                })
            }
        }

        handleSubmit = event => {
            const form = event.currentTarget;
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                validated: true
            })


            if (form.checkValidity() !== false) {
                this.props.saveCandidate(this.state.candidate);
            }

        }
        handleChange = evt => {
            const {
                id,
                value
            } = evt.target;
            let cand = this.state.candidate;
            cand[id] = value;
            for (var val in cand) {
                if (cand[val]) {
                    this.disabled = false;
                } else {
                    this.disabled = true;
                }
            }
            this.setState({
                candidate: cand
            })

        }

    render() {
        const candiate = this.state.candidate;

        if (candiate) {
            this.disabled = false;
        }
        return (
<Container className="details">
    <Row>
        <h2>{candiate ? 'Edit Details' : 'ADD Details'}</h2>
    </Row>
    < Row className = "form-details" >
        <Form  noValidate validated={this.state.validated} onSubmit={this.handleSubmit}  style={{width:'100%'}}>
            <Form.Group as={Row} >
                <Form.Label column sm={2} md={2}>
                  Id
                </Form.Label>
                <Col sm={10} md={4}>
                    <Form.Control
                    type="number"
                    id="id"
                    onChange={(e) => this.handleChange(e)}
                    readOnly
                    value={candiate.id}
                    placeholder="Id" />
                </Col>
                <Form.Label column sm={6} md={2}>
                 Seeking Job
                </Form.Label>
                <Col md={4} sm={10}>
                    <Form.Control as="select">
                    <option>Applying Actively</option>
                    <option>Open for Opportunity</option>
                    <option>Not available</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm={2} md={2}>
                  First Name
                </Form.Label>
                <Col sm={10} md={4}>
                    <Form.Control type="text"
                    onChange={this.handleChange}
                    id="firstName"
                    required
                    value = {candiate.firstName}
                    placeholder="First Name" />
                </Col>
                <Form.Label column sm={6} md={2}>
                   Age
                </Form.Label>
                <Col md={4} sm={10}>
                 <Form.Control type="number" placeholder="Age" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm={2} md={2}>
                 Last Name
                </Form.Label>
                <Col sm={10} md={4}>
                    <Form.Control type="text"
                    onChange={this.handleChange}
                    id="lastName"
                    required
                    value = {candiate.lastName}
                    placeholder="Last Name" />
                </Col>
                <Form.Label column sm={6} md={2}>
                  Work Remotely
                </Form.Label>
                    <Col md={4} sm={10} className="remote">
                    <Form.Check className="d-sm-block d-md-inline-block"  type="radio" id="yes" name="formHorizontalRadios" label="Yes" />
                    <Form.Check className="d-sm-block d-md-inline-block"   type="radio" id="no" name="formHorizontalRadios" label="No" />
                </Col>
            </Form.Group>
                <Form.Group as={Row} >
                <Form.Label column sm={2} md={2}>
                  Email Address
                </Form.Label>
                <Col sm={10} md={4}>
                    <Form.Control type="email"
                    onChange={this.handleChange}
                    id="email"
                    required
                    value={candiate.email}
                    placeholder="Email" />
                </Col>
                <Form.Label column sm={6} md={2}>
                  Address
                </Form.Label>
                <Col md={4} sm={10}>
                 <Form.Control as="textarea" rows={4} placeholder="Address" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm={2} md={2}>
                 Phone
                </Form.Label>
                <Col sm={10} md={4}>
                    <Form.Control type="text"
                    onChange={this.handleChange}
                    id="contact"
                    required
                    value={candiate.contact}
                    placeholder="Phone" />
                </Col>
            </Form.Group>
        < Row className = "justify-content-sm-center details-button " >
            <Col sm={12} md={2}><Button onClick={()=>{history.goBack()}} >Back</Button></Col>
            <Col sm={12} md={{ span: 2, offset: 2 }}> <Button type="submit" disabled={this.disabled} >Save</Button></Col>
        </Row>
        </Form>
    </Row>

</Container>
        )
    }

}

export default  connect(null, mapDispatchToProps) (Details)

