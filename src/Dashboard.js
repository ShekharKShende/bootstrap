import React from 'react';
import {
    connect
} from 'react-redux';
import {
    Table,
    Form,
    Button,
    Col,
    Row,
    Container
} from 'react-bootstrap';
import {
    getCandiates,
    deleteCandidate
} from './actions/login';
import history from './config/history';

const mapStateToProps = state => {
    return {
        candidates: state.login.candidates
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            dispatch(getCandiates())
        },
        deleteCandidates: (ids) => {
            dispatch(deleteCandidate(ids))
        }
    }
}


class Dashboard extends React.Component {

        componentDidMount() {
            this.props.getData();
        }
        addDetails = () => {
            history.push('/add');

        }
        editDetails = () => {
            let candiates = this.props.candidates.filter((cd) => {
                return cd.isChecked ? true : false;
            })
            if (candiates.length > 0) {
                delete candiates[0].isChecked;
                history.push('/add', {
                    candidate: candiates[0]
                });
            }
        }

        deleteCandidate = () => {
            let ids = [];
            this.props.candidates.filter((cd) => {
                return cd.isChecked ? ids.push(cd.id) : false;
            })
            this.props.deleteCandidates(ids[0]);
        }
        handleCheckChange = (e, candidate) => {
            if (e.target.checked) {
                candidate.isChecked = e.target.checked
            } else {
                delete candidate.isChecked;
            }
        }
    render() {
        const { candidates } = this.props;
        const renderRows = candidates.map(candidate => {
            return (
                <tr key={candidate.id.toString()}>
                <td><Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" onClick={(e)=>this.handleCheckChange(e, candidate)} />
                </Form.Group></td>
                <td>{candidate.id}</td>
                <td>{candidate.firstName}</td>
                <td>{candidate.lastName}</td>
                <td>{candidate.contact}</td>
                </tr>
            )
        })
        return (
<React.Fragment>
    <Container className="dashboard">
        <Row>
            <Table responsive bordered className="table">
            <thead>
                <tr>
                    <th> <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" />
                    </Form.Group></th>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
            </Table>
        </Row >
        < Row className = "justify-content-md-center romargin" >
            <Col sm={12} md={3}><Button onClick={this.addDetails}>Add</Button></Col>
            <Col sm={12} md={3}> <Button onClick={this.editDetails}>Edit</Button></Col>
            <Col sm={12} md={3}><Button onClick={this.deleteCandidate}>Delete</Button></Col>
        </Row>

    </Container>
</React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
