import { Login } from "../login/Login";
import { Register } from "../register/Register";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

const FrontPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} p={5} mt={5}>
      <Grid container textAlign="center" direction="row">
        <Grid item xs={6}>
          <Login />
        </Grid>
        <Grid item xs={6} >
          <Register />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FrontPage