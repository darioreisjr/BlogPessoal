import React from "react";
import { Grid } from "@material-ui/core";
import "./BannerInscrevaSe.css";
import { Box } from "@mui/material";
import { Typography } from "@material-ui/core";
import ModalPostagem from './../postagens/modalPostagem/ModalPostagem';


function BannerInscrevaSe() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container-bannerInscrevaSe-principal"
      >
        <Grid alignItems="center" item xs={6} className="container-bannerInscrevaSe-conteudo">
          <Box className="bannerInscrevaSe-conteudo-box">
            <Typography  className="bannerInscrevaSe-conteudo-titulo">
              Os artigos mais recentes para ajudá-lo a atualizar suas
              habilidades.
            </Typography>
          </Box >
          <Box className="bannerInscrevaSe-conteudo-box">
            <Typography className="bannerInscrevaSe-conteudo-paragrafo">
            Domine o Desenvolvimento Web com recursos incríveis que estão disponíveis gratuitamente! Participe da nossa Newsletter e seja alertado quando novos artigos, tópicos ou cursos forem publicados.
            </Typography>
          </Box>
          <Box className="bannerInscrevaSe-conteudo-box">
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={5} className="verde">
        <img
            src="https://i.imgur.com/0V4vZU1.png"
            alt="imagem de uma pessoa estudando tecnologia"
            width="50%"
            className="img-central principal-imagem-item"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default BannerInscrevaSe;
