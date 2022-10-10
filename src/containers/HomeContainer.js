import React, { Component } from "react";
import { Container, Col, Button } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUserDetail, getUsersList } from "../actions/userAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUserDetail());
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Daftar Pegawai</h1>
          <Col className="mb-2">
            <Link to={"/create"}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faUserPlus} /> create
              </Button>
            </Link>
          </Col>
        </Container>

        <TableComponent></TableComponent>
      </div>
    );
  }
}

export default connect()(HomeContainer);
