import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./UserHomeStyle";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

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
        <Grid xs={12} style={{ minHeight: "100vh" }}>
          <Box
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "20vh", display: "flex" }}
          >
            <Typography variant="h3">
              <b>Bem-vindo, User.</b>
            </Typography>
          </Box>

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
