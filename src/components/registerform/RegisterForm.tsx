import { Formik, Form, Field } from "formik";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Login } from "../login/Login";
import Stack from '@mui/material/Stack';

const RegisterForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }} p={5}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values,"regVal")
        }}
      >
        {() => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <label htmlFor="firstName">First Name</label>
                </Grid>
                <Grid item xs={10}>
                <Field type="text" name="firstName" />
                </Grid>
              <Grid item xs={2}>
                <label htmlFor="lastName">Last Name</label>
                </Grid>
                <Grid item xs={10}>
                <Field type="text" name="lastName" />
              </Grid>
              <Grid item xs={2}>
                <label htmlFor="email">Email</label>
                </Grid>
                <Grid item xs={10}>
                <Field type="email" name="email" />
              </Grid>
              <Grid item xs={2}>
                <label htmlFor="password">Password</label>
                </Grid>
                <Grid item xs={10}>
                <Field type="password" name="password" />
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={10}>
              <Stack spacing={2} direction="row">
                <Login/>
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
