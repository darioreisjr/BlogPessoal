import React, { ChangeEvent, useEffect, useState } from 'react'
import {  Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'

import './CadastroUsuario.css';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
        }
    }, [userResult])


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length > 7) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                alert("")
                toast.success('Usuário cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                
                //Pode modificar a msg de acordo com o erro 
                toast.error('Usuário já existente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }

        } else if  ( user.senha.length < 8) {
             // Mensagem que indica a quantidade minima de caracteres
            toast.info('Insira no miníno 8 caracteres na senha.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                })
        }
    }

    /*
        = : atribuição (valor = 9)
        == : op. aritmetico (valor == 9.0)
        === : op. idêntico (valor === 9.0)
    */

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="container-cadastrar">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>

                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2 fonte-titulo-cadastrar'>Cadastrar</Typography>

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.nome}
                            id='nome'
                            label='Nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            className="input-cadastrar"
                            fullWidth 
                            required /> {/* Required: indica que o campo deve ser preenchido */}

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.usuario}
                            type="email"
                            id='usuario'
                            label='Usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            className="input-cadastrar"
                            fullWidth required />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.foto}
                            id='foto'
                            label='Foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            className="input-cadastrar"
                            fullWidth />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.senha}
                            id='senha'
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal' type='password'
                            className="input-cadastrar"
                            fullWidth required />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            value={confirmarSenha}
                            id='confirmarSenha'
                            label='Confirmar Senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal' type='password'
                            className="input-cadastrar"
                            fullWidth required />


                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>

                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario