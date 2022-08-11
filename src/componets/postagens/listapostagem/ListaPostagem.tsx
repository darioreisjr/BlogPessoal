import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
//import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

/* Um React Hook que permite que você tenha um estado em um componente funcional. */
  const [posts, setPosts] = useState<Postagem[]>([])
  //const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  /* Verificando se o token está vazio e se estiver, alertará o usuário que ele precisa estar logado
  e, em seguida, navegue até a página de login. */
  useEffect(() => {
    if (token === "") {
      toast.info('Você precisa estar logado', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      navigate("/login")
    }
  }, [token])

  
/**
   * GetPost() é uma função assíncrona que chama busca() com os parâmetros "/postagens", setPosts e
   * um objeto com uma propriedade de cabeçalho que possui uma chave de 'Autorização' e um valor de token.
   */
  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

/* Chamando a função `getPost()` toda vez que o `posts.length` muda. */
  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;