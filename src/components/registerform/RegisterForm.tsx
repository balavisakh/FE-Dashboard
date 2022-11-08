import { Formik, Form, Field, ErrorMessage } from "formik";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Login } from "../login/Login";
import Stack from "@mui/material/Stack";
import { submitApi } from "../api/api";

const RegisterForm = () => {
  const handleValidations = (values: any) => {
    const errors = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else {
      errors.firstName = "";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else {
      errors.lastName = "";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else {
      errors.email = "";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/i.test(
        values.password
      )
    ) {
      errors.password = "Invalid password";
    } else {
      errors.password = "";
    }
    // return errors;
  };

  const handleSubmit = (values: any) => {
    var raw = JSON.stringify({
      first_name: values?.firstName,
      last_name: values?.lastName,
      email: values?.email,
      password: values?.password,
    });
    submitApi("register", raw);
  };

  return (
    <Box sx={{ flexGrow: 1 }} p={5}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validate={handleValidations}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <label htmlFor="firstName">First Name</label>
              </Grid>
              <Grid item xs={10}>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </Grid>
              <Grid item xs={2}>
                <label htmlFor="lastName">Last Name</label>
              </Grid>
              <Grid item xs={10}>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </Grid>
              <Grid item xs={2}>
                <label htmlFor="email">Email</label>
              </Grid>
              <Grid item xs={10}>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </Grid>
              <Grid item xs={2}>
                <label htmlFor="password">Password</label>
              </Grid>
              <Grid item xs={10}>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={10}>
                <Stack spacing={2} direction="row">
                  <Login />
                  <Button type="submit" variant="contained" color="secondary">
                    Register
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
