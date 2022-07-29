import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="container-navbar">
        <Toolbar variant="dense" className="container-conteudo">
          <Box className="container-logo">
            <Typography variant="h1" color="inherit" className="titulo">
              Dario Reis+
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start" className="container-menu">
            <Box mx={1} className="cursor">
              <Typography
                variant="h6"
                color="inherit"
                className="conteudo-item"
              >
                home
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography
                variant="h6"
                color="inherit"
                className="conteudo-item"
              >
                postagens
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography
                variant="h6"
                color="inherit"
                className="conteudo-item"
              >
                temas
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography
                variant="h6"
                color="inherit"
                className="conteudo-item"
              >
                cadastrar tema
              </Typography>
            </Box>
            <Link to='/login' className='text-decorator-none' >
              <Box mx={1} className="cursor">
                <Typography
                  variant="h6"
                  color="inherit"
                  className="conteudo-item"
                >
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
