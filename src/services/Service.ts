import { SecurityUpdateGoodSharp } from "@mui/icons-material";
import axios from "axios";

export const api = axios.create({
    baseURL:'https://darioreisjrblogpessoal.herokuapp.com'
})

export const login = async(url: any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    SecurityUpdateGoodSharp(resposta.data)
}