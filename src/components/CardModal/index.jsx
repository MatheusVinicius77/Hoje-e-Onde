import {React, useState} from "react";
import styles from "./styles.module.css";
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import like from '../../assets/icons/favorito.svg'

export default function CardModal({ fotoIcone, linkImagem, titulo, distancia, hora }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className={styles.Card_modal}>
            <div className={styles.Card_modal_banner}>
                <img src={linkImagem} alt="" srcset="" />
            </div>
            <div className={styles.Card_modal_content}>
                <div className={styles.content_linha1}>
                    <div className={styles.content_linha1_icone}>
                        <img src={fotoIcone} alt="" srcset="" />
                    </div>
                    <h2>Nome de Usuario</h2>
                </div>
                <div className={styles.content_linha2}>
                    <h1>{titulo}</h1>
                    <div>
                        <p>{distancia}</p>
                        <p> {hora} </p>
                    </div>
                </div>
                <div className={styles.content_linha3}>
                <p>aaaa</p></div>
                <div className={styles.content_linha4}>
                    <img src={save} alt="" srcset="" />
                    <img src={share} alt="" srcset="" />
                    <img src={like} alt="" srcset="" />
                </div>
            </div>
        </div>

    );
}
