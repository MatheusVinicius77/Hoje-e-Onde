import { React, useState } from "react";
import styles from "./styles.module.css";
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import like from '../../assets/icons/favorito.svg'

export default function CardModal({ evento, hora }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className={styles.Card_modal}>
            <div className={styles.Card_modal_banner}>
                <img src={evento.imagem_evento} alt="" srcset="" />
            </div>
            <div className={styles.Card_modal_content}>
                <div className={styles.content_linha1}>
                    <div className={styles.content_linha1_icone}>
                        <img src={evento.usuario.user_img} alt="" srcset="" />
                    </div>
                    <h2>{evento.usuario.nome}</h2>
                </div>
                <div className={styles.content_linha2}>
                    <h1>{evento.nome_evento}</h1>
                    <div>
                        <p> {hora}hrs </p>
                    </div>
                </div>
                <div className={styles.content_linha3}>
                    <p>{evento.descricao}</p></div>
                <div className={styles.content_linha4}>
                    <img src={save} alt="" srcset="" />
                    <img src={share} alt="" srcset="" />
                    <img src={like} alt="" srcset="" />
                </div>
            </div>
        </div>

    );
}
