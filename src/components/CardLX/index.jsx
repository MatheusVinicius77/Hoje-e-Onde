import {React, useState} from "react";
import styles from "./styles.module.css";
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import favorito from '../../assets/icons/favorito.svg'
import CardModal from "../CardModal";
//Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CardLx({fotoIcone,linkImagem}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className={styles["banner-card"]} style={{ backgroundImage: `url(${linkImagem})` }}>
            <Button variant="" className={styles.playbt} onClick={handleShow}>
                    
            </Button>
             <section>
                    <button>
                        <img src={favorito} alt="" />
                        <p className="text-7">2 Membros</p>
                    </button>
                    
                    
                    <button><img src={share} alt="" /></button>
                    <button><img src={save} alt="" /></button>
             </section>

            {/* MODAL */}
             <Modal
                show={show}
                onHide={handleClose}
            >
                <CardModal fotoIcone={fotoIcone} linkImagem={linkImagem}/>
            </Modal>
        </div>

    );
}
