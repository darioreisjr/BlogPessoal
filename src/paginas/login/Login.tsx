import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
//import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { Box } from '@mui/material';

/* Importando o hook useDispatch da biblioteca react-redux. */
import { useDispatch } from 'react-redux';

/* Importando a função do criador de ações do arquivo de actions. */
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
  // redirecionar o usuario para determinada pagina
  let navigate = useNavigate();
  /* Um hook que permite despachar ações para a store do Redux. */
  const dispatch = useDispatch();

  /* Um React Hook que permite armazenar um valor no estado do componente. */
  const [token, setToken] = useState("");

  //hooks que vão manipular o nosso Local Storage para gravar o Token
  //const [token, setToken] = useLocalStorage("token");

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
          if(token !== ''){
            /* Enviando uma ação para a store do Redux. */
            dispatch(addToken(token))
            navigate('/home')
          }
      }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault();
      try{
          await login(`/usuarios/logar`, userLogin, setToken)

          toast.success('Usuário logado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }catch(error){
          toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container-login "
      >
        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form action="" onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="fonte-titulo-login "
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
