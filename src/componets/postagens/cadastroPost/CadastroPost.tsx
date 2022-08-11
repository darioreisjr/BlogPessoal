import React, { ChangeEvent, useEffect, useState } from "react";
import {Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText,} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
//import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroPost() {
  let navigate = useNavigate();

  /* Obtendo o id da url. */
  const { id } = useParams<{ id: string }>();

/* Um React Hook que é usado para armazenar o estado do componente. */
  const [temas, setTemas] = useState<Tema[]>([]);
  //const [token, setToken] = useLocalStorage("token");

  /* Um hook que é usado para obter o estado do token. */  
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  /* Verificando se o token está vazio, se estiver, alertará o usuário que ele precisa estar logado
  e navegue até a página de login. */
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
      navigate("/login");
    }
  }, [token]);


  /* Um React Hook que é usado para armazenar o estado do componente. */
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });


  /* Um React Hook que é usado para armazenar o estado do componente. */
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    tema: null,
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/tema", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Postagem atualizada com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Postagem cadastrada com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    back();
  }

  function back() {
    navigate("/posts");
  }

  return (
    <Container maxWidth="sm" className="container-cadastroPost">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro de postagem
        </Typography>
        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="Titulo da postagem"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="Digite seu texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/tema/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
