import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width={"200"}>Nama</td>
          <td width={"10"}>:</td>
          <td>{props.getUserDetail.nama}</td>
        </tr>
        <tr>
          <td width={"200"}>Provinso</td>
          <td width={"10"}>:</td>
          <td>{props.getUserDetail.provinsi}</td>
        </tr>
        <tr>
          <td width={"200"}>Kabupaten</td>
          <td width={"10"}>:</td>
          <td>{props.getUserDetail.kabupaten}</td>
        </tr>
        <tr>
          <td width={"200"}>Kecamatan</td>
          <td width={"10"}>:</td>
          <td>{props.getUserDetail.kecamatan}</td>
        </tr>
        <tr>
          <td width={"200"}>Kelurahan</td>
          <td width={"10"}>:</td>
          <td>{props.getUserDetail.kelurahan}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
