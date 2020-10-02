import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./UserHomeStyle";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

export default function UserHomeView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <div className={classes.rightSideNavBar}>
            <MenuItem>
              <Typography color="primary">Tela Inicial</Typography>
            </MenuItem>

            <MenuItem>
              <Typography color="primary">Solicitacoes</Typography>
            </MenuItem>

            <MenuItem>
              <Typography color="primary">Minha Instituicao</Typography>
            </MenuItem>
          </div>

          <MenuItem>
            <Typography color="primary">Seu perfil</Typography>
          </MenuItem>

          <MenuItem>
            <Typography color="primary">Sair</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid
          xs={12}
          justify="center"
          align="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h3">
            <b>Bem-vindo, User.</b>
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Numero</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Nome do Ambiente</TableCell>
                  <TableCell align="right">Estado</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </div>
  );
}
