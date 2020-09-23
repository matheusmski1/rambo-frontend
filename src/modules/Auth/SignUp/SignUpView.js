import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import React from "react";
import useStyles from "./SignUpStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const SingUpView = ({ form }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <form className={classes.form} onSubmit={form.handleSubmit}>
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
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Primeiro nome"
                  fullWidth
                  name="firstName"
                  value={form.values.firstName}
                  onChange={form.handleChange}
                  error={!!form.errors.firstName}
                  helperText={form.errors.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Sobrenome"
                  fullWidth
                  name="lastName"
                  value={form.values.lastName}
                  onChange={form.handleChange}
                  error={!!form.errors.lastName}
                  helperText={form.errors.lastName}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Endereço de e-mail"
              fullWidth
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              error={!!form.errors.email}
              helperText={form.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Senha"
                  fullWidth
                  name="password"
                  value={form.values.password}
                  onChange={form.handleChange}
                  error={!!form.errors.password}
                  helperText={form.errors.password}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Confirmação de Senha"
                  fullWidth
                  name="passwordConfirm"
                  value={form.values.passwordConfirm}
                  onChange={form.handleChange}
                  error={!!form.errors.passwordConfirm}
                  helperText={form.errors.passwordConfirm}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Chave de instituição"
              fullWidth
              name="institutionKey"
              value={form.values.institutionKey}
              onChange={form.handleChange}
              error={!!form.errors.institutionKey}
              helperText={form.errors.institutionKey}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SingUpView;
