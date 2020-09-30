import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./SignInStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

export default function SignInView({ formik }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={3}
          justify="center"
          alignContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={10}>
            <Typography variant="h3" align="center">
              Entrar
            </Typography>
            <hr className={classes.hr} />
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Login"
              name="login"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            ></TextField>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            ></TextField>
          </Grid>

          <Grid item xs={12} align="center">
            <Button
              color="primary"
              variant="contained"
              type="submit"
              size="medium"
            >
              Entrar
            </Button>
          </Grid>

          <div className={classes.forgotBox} align="center">
            <Grid item xs={12}>
              <Link to="/auth/Recovery">Esqueci minha Senha</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/auth/sign-up">Ainda nao possuo uma conta</Link>
            </Grid>
          </div>
        </Grid>
      </form>
    </Container>
  );
}
