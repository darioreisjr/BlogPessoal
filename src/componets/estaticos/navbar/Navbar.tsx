import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {useNavigate } from 'react-router-dom'
//import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
  //const [token, setToken] = useLocalStorage('token');

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();
  
  let navigate = useNavigate();
  
  function goLogout(){
      //setToken('')
      dispatch(addToken(''));
      alert("Usuário deslogado")
     navigate('/login')
  }

  var navbarComponets;

  if(token != "") {
    navbarComponets = <AppBar position="static" className="container-navbar">
    <Toolbar variant="dense" className="container-conteudo">
      <Box className="container-logo">
        <Typography variant="h1" color="inherit" className="titulo">
          Dario Reis+
        </Typography>
      </Box>

      <Box display="flex" justifyContent="start" className="container-menu">

        <Link to="/home">
        <Box mx={1} className="cursor">
          <Typography
            variant="h6"
            color="inherit"
            className="conteudo-item"
          >
            home
          </Typography>
        </Box>
        </Link>

        <Link to="/posts">
        <Box mx={1} className="cursor">
          <Typography
            variant="h6"
            color="inherit"
            className="conteudo-item"
          >
            postagens
          </Typography>
        </Box>
        </Link>

        <Link to="/temas">
        <Box mx={1} className="cursor">
          <Typography
            variant="h6"
            color="inherit"
            className="conteudo-item"
          >
            temas
          </Typography>
        </Box>
        </Link>

        <Link to="/formularioTema">
        <Box mx={1} className="cursor">
          <Typography
            variant="h6"
            color="inherit"
            className="conteudo-item"
          >
            cadastrar tema
          </Typography>
        </Box>
        </Link>

          <Box mx={1} className="cursor" onClick={goLogout} >
            <Typography
              variant="h6"
              color="inherit"
              className="conteudo-item"
            >
              logout
            </Typography>
          </Box>

      </Box>
    </Toolbar>
  </AppBar>
  }
  return (
    <>
      {navbarComponets}
    </>
  );
}

export default Navbar;
