const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "Nama harus diisi";
  }

  if (!values.provinsi || values.provinsi === "") {
    errors.provinsi = "Provinsi harus diisi";
  }

  if (!values.kabupaten || values.kabupaten === "") {
    errors.kabupaten = "Kabupaten harus diisi";
  }

  if (!values.kecamatan || values.kecamatan === "") {
    errors.kecamatan = "Kecamatan harus diisi";
  }

  if (!values.kelurahan || values.kelurahan === "") {
    errors.kelurahan = "Kelurahan harus diisi";
  }

  return errors;
};

export default UserValidation;
