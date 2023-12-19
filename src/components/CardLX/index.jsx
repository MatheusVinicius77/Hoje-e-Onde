import { React, useState } from "react";
import styles from "./styles.module.css";
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import favorito from '../../assets/icons/favorito.svg'
import CardModal from "../CardModal";
//Bootstrap
import Modal from 'react-bootstrap/Modal';

export default function CardLx({ evento, hora }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className={styles["banner-card"]} style={{ backgroundImage: `url(${evento.imagem_evento})` }}>
            <div variant="" className={styles.playbt} onClick={handleShow}>

            </div>
            <section>
                <button>
                    <img src={favorito} alt="" />
                    <p className="text-1 white-text-color"></p>
                </button>


                <button><img src={share} alt="" /></button>
                <button><img src={save} alt="" /></button>
            </section>

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
