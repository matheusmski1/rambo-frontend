import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./UserHomeStyle";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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

export default function UserHomeView({ rows }) {
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
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Numero </TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Nome do Ambiente</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.numero}</TableCell>
                    <TableCell> {row.data}</TableCell>
                    <TableCell>{row.nomeDoAmbiente}</TableCell>
                    <TableCell>{row.estado}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </div>
  );
}
