import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Button } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import './ModalPostagem.css';
import CadastroPost from '../cadastroPost/CadastroPost';
import { Modal, Box } from '@mui/material';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function ModalPostagem () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} >
      <Box display="flex" justifyContent="flex-end" className="cursor ">
        <CloseIcon onClick={handleClose}/>
      
      </Box>
      
      <CadastroPost/>
      
    </div>
  );

  return (
    <div>
      <button className="learn-more btnModal" onClick={handleOpen}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Nova Postagem</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="container-modal"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPostagem