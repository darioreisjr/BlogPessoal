import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { Box } from '@mui/material';

function Login() {
  // redirecionar o usuario para determinada pagina
  let navigate = useNavigate();

  //hooks que vão manipular o nosso Local Storage para gravar o Token
  const [token, setToken] = useLocalStorage("token");

  // useState define como uma determinada variavel será inicializada quando o comp. for renderizado
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

      setUserLogin({
          ...userLogin,
          [e.target.name]: e.target.value
      })
  }

      useEffect(()=>{
          if(token != ''){
              navigate('/home')
          }
      }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault();
      try{
          await login(`/usuarios/logar`, userLogin, setToken)

          alert('Usuário logado com sucesso!');
      }catch(error){
          alert('Dados do usuário inconsistentes. Erro ao logar!');
      }
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container-login"
      >
        <Grid alignItems="center" xs={6} >
          <Box paddingX={20} className="">
            <form action="" onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="fonte-titulo-login"
              >
                Entrar
              </Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="Digite seu usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                className="input-login"
                fullWidth
              />
              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="Digite sua senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                className="input-login"
                fullWidth
              />
              <Box marginTop={2} textAlign="center">
                <Button type="submit"  className='btn-logar'>
                  Logar
                </Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastrousuario">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="font-cadastre-se"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className="imagem"></Grid>
      </Grid>
    </div>
  );
}

export default Login;
