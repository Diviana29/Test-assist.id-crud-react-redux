import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Input, Label, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";
// import { TextField } from "@mui/material";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlform="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      nama: state.users.getUserDetail.nama,
      provinsi: state.users.getUserDetail.provinsi,
      kabupaten: state.users.getUserDetail.kabupaten,
      kecamatan: state.users.getUserDetail.kecamatan,
      kelurahan: state.users.getUserDetail.kelurahan,
    },
  };
};

// const provinsi = () => {
//   return (
//     <div>
//       <TextField type={'text'} sx={{margin: 3}} placeholder="Provinsi" variant="outlined" />
//       <TextField type={'text'} sx={{margin: 3}} placeholder="Kabupaten" variant="standard" />
//       <TextField  placeholder="Kecamatan" variant="standard" />
//       <TextField placeholder="Kelurahan" variant="standard" />
//     </div>
//   );
// };

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama : "
                placeholder="masukkan nama"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="provinsi"
                component={renderField}
                label="Provinsi : "
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kabupaten"
                component={renderField}
                label="Kabupaten : "
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kecamatan"
                component={renderField}
                label="Kecamatan : "
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kelurahan"
                component={renderField}
                label="Kelurahan : "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
