import { React, useState } from "react";
import styles from "./styles.module.css";
import navWave from '../../assets/icons/navWave.svg'
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import like from '../../assets/icons/favorito.svg'
import CardModal from "../CardModal";
//Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Card({ evento, width, hora }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    console.log(evento.nome_evento, evento.nome_evento.length)
    let tamTitulo = evento.nome_evento.length
    return (

        <div className={`${styles['content-card']}`} style={{ backgroundImage: `url(${evento.imagem_evento})`, width: width }}>
            {/* CONTENT BUTTON MODAL */}
            <Button variant="" className={styles.playbt} onClick={handleShow}>

            </Button>
            <div className={styles["image-card"]}>

                {/* BARRA DE INFORMAÇÕES */}
                <div className={styles["linha1"]}>
                    <div className={styles["iconePerfil"]}>
                        <img src={evento.usuario.user_img} alt="" />
                    </div>
                    <div className={styles["iconesTop"]}>
                        <img className={styles["share"]} src={share} alt="" srcset="" />
                        <img className={styles["save"]} src={save} alt="" srcset="" />
                    </div>
                </div>
                <div className={styles["linha2"]}>
                    <h6  className={`text-1 ${styles.eventName}`}>{evento.nome_evento}</h6>
                </div>
                <div className={styles["linha3"]}>
                    <div className={styles["likeContent"]}>
                        <img src={like} alt="" />
                        <p className="text-6">0 Membros</p>
                    </div>
                    <p className="text-6">{hora}hrs</p>
                </div>
            </div>
            {/* MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
            >
                <CardModal evento={evento} hora={hora} />
            </Modal>
        </div>

    );
}
