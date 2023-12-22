import React from 'react'
import styles from './styles.module.css'
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import favorito from '../../assets/icons/favorito.svg'

export default function FormaR({ evento, hora,curtida }) {
    return (
        <div className={`flex column ${styles.container}`}>
            <div className={`flex ${styles.container0}`}>
                <figure className={styles.figure}>
                    <img src={evento.usuario.user_img} alt="" srcset="" />
                </figure>
                <h1 className='text-1 weight-1'>{evento.nome_evento}</h1>
            </div>
            <div className={`flex text-6 ${styles.container2}`}>
                <p className="text-6">{hora}hrs</p>
            </div>

            <div className={`flex text-6 ${styles.container3}`}>
                <button>
                    <img src={favorito} alt="" />
                    <p className="text-7">{curtida} Membros</p>
                </button>

                <div>
                    <button><img src={share} alt="" /></button>
                    <button><img src={save} alt="" /></button>
                </div>
            </div>
        </div>
    )
}
