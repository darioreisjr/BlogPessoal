import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid container className="container-rodape">
        <Grid alignItems="center" xs={12}>
          <Box className="container-rodape-conteudo">
            <Box>
              <Typography className="rodape-titulo">
                Mergulhe nas habilidades
              </Typography>
            </Box>

            <Box className="container-rodape-textos">
              <Box className="container1-textos">
                <Typography>
                  Os artigos e cursos mais recentes para ajudá-lo a atualizar
                  suas habilidades e aprender as últimas tendências. Domine o
                  desenvolvimento web com esses recursos incríveis que estão
                  disponíveis gratuitamente!
                </Typography>
              </Box>

              <Box className="container2-textos">
                <Typography>Home</Typography>
                <Typography>Blog</Typography>
                <Typography>Postagem</Typography>
              </Box>

              <Box className="container3-textos">
                <Typography>Sobre</Typography>
                <Typography>Contatos</Typography>
                <Typography>Política de Privacidade</Typography>
                <Typography>termos e Condições</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/darioreisjr" target="_blank">
                <FacebookIcon className="icons" />
              </a>
              <a href="https://www.instagram.com/darioreisjr/" target="_blank">
                <InstagramIcon className="icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/darioreisjr/"
                target="_blank"
              >
                <LinkedInIcon className="icons" />
              </a>
            </Box>
          </Box>

          <Box className="container-footer">
            <Box>
              <Typography>© 2022 Copyright:</Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography className="container-rodape-links" >brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
