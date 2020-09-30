import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./RecoveryStyle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function RecoveryView({ formik }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justify="center"
        alignContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={10} align="center">
          <Typography variant="h4">
            <b>Recuperacao de Conta </b>
          </Typography>
          <hr className={classes.hr}></hr>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Para realizar a recuperação, será enviado ao seu endereço de e-mail
            um código para termos certeza se você é o titular da conta. Após
            confirmação do código, você será redirecionado para efetuar a
            alteração da senha.
          </Typography>
        </Grid>

        <Grid item xs={8} align="center">
          <TextField
            label="Endereco de Email"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={!!formik.errors.email}
            helperText={formik.errors.email}
          ></TextField>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="contained" type="submit">
            Solicitar Codigo
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Link to="/auth/sign-in">Voltar para tela principal</Link>
        </Grid>
      </Grid>
    </Container>
  );
}
