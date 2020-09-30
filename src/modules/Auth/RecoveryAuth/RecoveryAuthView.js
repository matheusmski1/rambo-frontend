import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./RecoveryAuthStyle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function RecoveryAuthView({ formik }) {
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
            Por favor, confira sua caixa de mensagens e digite o código de
            confirmação de titularidade da conta no campo abaixo.
          </Typography>
        </Grid>

        <Grid item xs={8} align="center">
          <TextField
            label="Confirmacao de Titularidade"
            fullWidth
            name="verificationCode"
            value={formik.values.verificationCode}
            onChange={formik.handleChange}
            error={!!formik.errors.verificationCode}
            helperText={formik.errors.verificationCode}
          ></TextField>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="contained" type="submit">
            Continuar
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Link to="/auth/sign-in">Voltar para tela principal</Link>
        </Grid>
      </Grid>
    </Container>
  );
}
