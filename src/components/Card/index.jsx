import React from "react";
import styles from "./styles.module.css";
import navWave from '../../assets/icons/navWave.svg'
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import like from '../../assets/icons/favorito.svg'

export default function card({linkImagem,titulo,membros,distancia,hora}){
    return(
        
            <div className={styles["content-card"]}  style={{backgroundImage:`url(${linkImagem})`}}>
                <div className={styles["image-card"]} style={{backgroundImage:`url(${navWave})`}}>
                    <div className={styles["linha1"]}>
                        <div className={styles["iconePerfil"]}>
                            <img src={linkImagem} alt="" />
                        </div>
                        <div className={styles["iconesTop"]}>
                            <img className={styles["share"]} src={share} alt="" srcset="" />
                            <img className={styles["save"]} src={save} alt="" srcset="" />
                        </div>
                    </div>
                    <div className={styles["linha2"]}>
                        <h6>{titulo}</h6>
                    </div>
                    <div className={styles["linha3"]}>
                        <div className={styles["likeContent"]}>
                            <img src={like} alt="" />
                            <p>{membros} Membros</p>
                        </div>
                        <p>{distancia}Km</p>
                        <p>{hora}hrs</p>
                    </div>
                </div>
            </div>
        
    );
}
