import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./SignUpStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const SingUpView = ({ formik }) => {
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
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Cadastre-se
            </Typography>
            <hr className={classes.hr} />
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Primeiro nome"
                  fullWidth
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={!!formik.errors.firstName}
                  helperText={formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Sobrenome"
                  fullWidth
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={!!formik.errors.lastName}
                  helperText={formik.errors.lastName}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <TextField
              label="Endereço de e-mail"
              fullWidth
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Senha"
                  fullWidth
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={!!formik.errors.password}
                  helperText={formik.errors.password}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Confirmação de Senha"
                  fullWidth
                  name="passwordConfirm"
                  value={formik.values.passwordConfirm}
                  onChange={formik.handleChange}
                  error={!!formik.errors.passwordConfirm}
                  helperText={formik.errors.passwordConfirm}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <TextField
              label="Chave de instituição"
              fullWidth
              name="institutionKey"
              value={formik.values.institutionKey}
              onChange={formik.handleChange}
              error={!!formik.errors.institutionKey}
              helperText={formik.errors.institutionKey}
            />
          </Grid>
          <div className={classes.boxSubmit}>
            <Button color="primary" variant="contained" type="submit">
              Continuar com o Registro
            </Button>
            <Typography variant="h4" align="center">
              <Link to="/auth/sign-in">Ja possuo uma conta, desejo entrar</Link>
            </Typography>
          </div>
        </Grid>
      </form>
    </Container>
  );
};

export default SingUpView;
