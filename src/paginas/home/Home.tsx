import {  Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
//import useLocalStorage from "react-use-localstorage";
import "../../assets/imagemHome.png";
import ModalPostagem from "../../componets/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../componets/postagens/tabpostagem/TabPostagem";
// import { TokenState } from "../../store/tokens/tokensReducer";
import "./Home.css";
import BannerInscrevaSe from './../../componets/bannerInscrevaSe/BannerInscrevaSe';

function Home() {

  // let navigate = useNavigate();
  // //const [token, setToken] = useLocalStorage('token');

  // /* Um hook que é usado para obter o estado do token. */  
  // const token = useSelector<TokenState, TokenState["tokens"]>(
  //   (state) => state.tokens
  // );

  // useEffect(()=> {
  //   if (token === '') {
  //     toast.info('Você precisa estar logado', {
  //       position: "bottom-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //     navigate("/login")
  //   }
  // }, [token])

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container-principal"
      >
        <BannerInscrevaSe/>

        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className="box-conteudo">
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="box-conteudo-titulo"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="box-conteudo-subtitulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem/>
            </Box>
            <Link to="/posts">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Ver postagem</span>
              </button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} className="container-img sessao-principal-imagem">
          <img
            src="https://i.imgur.com/0V4vZU1.png"
            alt="imagem de uma pessoa estudando tecnologia"
            width="50%"
            className="img-central principal-imagem-item"
          />
        </Grid>

        <Grid xs={12} className="cor-branca"></Grid>
          <TabPostagem/>
      </Grid>
    </>
  );
}

export default Home;
