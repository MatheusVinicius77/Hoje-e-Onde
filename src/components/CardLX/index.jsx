import React from "react";
import styles from "./styles.module.css";
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import favorito from '../../assets/icons/favorito.svg'

export default function CardLx({linkImagem}) {
    return (

        <div className={styles["banner-card"]} style={{ backgroundImage: `url(${linkImagem})` }}>
             <section>
                    <button>
                        <img src={favorito} alt="" />
                        <p className="text-7">2 Membros</p>
                    </button>
                    
                    
                    <button><img src={share} alt="" /></button>
                    <button><img src={save} alt="" /></button>
             </section>
        </div>

    );
}
