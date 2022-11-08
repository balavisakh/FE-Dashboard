import { Formik, Form, Field } from "formik";
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
  return (
    <Box sx={{ flexGrow: 1 }} p={5}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleClick}
      >
        {() => (
          <Form>
            <Grid container spacing={1}>
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
