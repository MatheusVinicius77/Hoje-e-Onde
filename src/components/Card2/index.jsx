import {React, useState} from "react";
import styles from './styles.module.css'
import LegendaR from '../Legenda-reta/index'
import CardModal from "../CardModal";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Card2({ linkImagem, titulo, fotoIcone }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={`${styles.card2}`}>
             <Button variant=""  className={`${styles.banner}`} onClick={handleShow}>
                <img src={linkImagem} alt="" srcset=""/>       
            </Button>
            
            <div className={styles.legenda}>
                <LegendaR icone={fotoIcone} titulo={titulo}></LegendaR>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <CardModal fotoIcone={fotoIcone} linkImagem={linkImagem} titulo={titulo} />
            </Modal>
        </div>
    )
}
