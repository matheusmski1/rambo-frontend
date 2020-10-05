import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./InstitutionPageStyle";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Checkbox from "@material-ui/core/Checkbox";

export default function InstitutionPageView({ rows }) {
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
      <Container maxHeight="md">
        <Box mt={4} ml={8}>
          <Typography variant="h4">
            <b> Minha Instituicao</b>
          </Typography>
        </Box>
        <hr className={classes.hr}></hr>

        <Box xs={12} p={3}>
          <Typography variant="h7">
            Selecione um ambiente para criar uma nova solicitação de reserva de
            ambiente.
          </Typography>
        </Box>
        <Grid justify="center" align="center">
          <Paper component="form" className={classes.root}>
            <InputBase
              style={{ minWidth: "90vh" }}
              className={classes.input}
              placeholder="Procure por seu ambiente desejado"
              inputProps={{ "aria-label": "instituicao" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid xs={12} justify="flex-end" style={{ display: "flex" }}>
          <Typography xs={3}>
            Mostrar somente ambiente com indice: Muito Requisitado
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "muitorequisitado" }}
            />
          </Typography>
          <Typography>
            Pouco Requisitado
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "poucorequisitado" }}
            />
          </Typography>
          <Typography>
            Desativado
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "desativado" }}
            />
          </Typography>
        </Grid>

        <Box mt={3} mb={3}>
          <Typography variant="h5">Ambientes disponiveis</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nome do Ambiente</TableCell>
                <TableCell align="center">Ultima reserva</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.nomeDoAmbiente}</TableCell>
                  <TableCell align="center">{row.ultimaReserva}</TableCell>
                  <TableCell align="right">{row.estado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
