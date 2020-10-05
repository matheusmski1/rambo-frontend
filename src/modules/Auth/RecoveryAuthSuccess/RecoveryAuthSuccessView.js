import Typography from "@material-ui/core/Typography";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
export default function SignUpSuccessView() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justify="center"
        alignContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid>
          <CheckCircleOutlineIcon
            style={{ fontSize: 60 }}
          ></CheckCircleOutlineIcon>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h3">
            <b>Sucesso!</b>
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6">
            Sua senha foi alterada com sucesso. Tente entrar novamente, agora
            com a sua mais nova senha.
          </Typography>
        </Grid>

        <Link to="/auth/sign-in" variant="h8">
          Voltar para tela principal
        </Link>
      </Grid>
    </Container>
  );
}
