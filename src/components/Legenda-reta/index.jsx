import React from 'react'
import styles from './styles.module.css'
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import favorito from '../../assets/icons/favorito.svg'

export default function FormaR({ icone, titulo }) {
    return (
        <div className={`flex column ${styles.container}`}>
            <div className={`flex ${styles.container0}`}>
                <figure className={styles.figure}>
                <img src={icone} alt="" srcset="" />
                </figure>
                <h1 className='text-1 weight-1'>{titulo}</h1>
            </div>
            <div className={`flex text-6 ${styles.container2}`}>
                <p className="text-6">10:15hrs</p>
                <p className="text-6">1Km</p>
            </div>

            <div className={`flex text-6 ${styles.container3}`}>
                <button>
                    <img src={favorito} alt="" />
                    <p className="text-7">2 Membros</p>
                </button>
                
                <div>
                    <button><img src={share} alt="" /></button>
                    <button><img src={save} alt="" /></button>
                </div>
            </div>
        </div>
    )
}
