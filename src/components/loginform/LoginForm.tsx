import { Formik, Form, Field, ErrorMessage } from "formik";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();

  const handleClick = (values: any) => {
    console.log(values, "val");
  };
  const handleValidations = (values:any) => {
    const errors = {email:values.email, password: values.password};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    else{
     errors.email = ''
    }
    if(!values.password) {
     errors.password = 'Password is required';
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/i.test(values.password)){
     errors.password = 'Invalid password';
    }
    else {
     errors.password = ''
    }
    return errors;
  }
  return (
    <Box sx={{ flexGrow: 1 }} p={5}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleClick}
        validate={handleValidations}
      >
        {() => (
          <Form>
            <Grid container spacing={1}>
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
                  <Button
                    onClick={() => navigate(-1)}
                    variant="outlined"
                    color="primary"
                  >
                    Back
                  </Button>
                  <Button type="submit" variant="contained" color="success">
                    Login
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

export default LoginForm;
