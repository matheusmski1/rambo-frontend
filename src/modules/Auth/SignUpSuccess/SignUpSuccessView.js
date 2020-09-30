import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./SignUpSuccessStyle";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
export default function SignUpSuccessView() {
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
        <Grid>
          <CheckCircleOutlineIcon
            style={{ fontSize: 60 }}
          ></CheckCircleOutlineIcon>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h3"> Bem vindo a bordo!</Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6">
            Sua solicitação de cadastro foi enviada com sucesso. Você será
            notificado através do e-mail após o representante da instituição
            aceitar sua solicitação.
          </Typography>
        </Grid>

        <Link to="/auth/sign-in" variant="h8">
          Voltar para tela principal
        </Link>
      </Grid>
    </Container>
  );
}
