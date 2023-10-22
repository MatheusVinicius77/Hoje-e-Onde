import React from 'react'
import styles from './styles.module.css'
import LegendaR from '../Legenda-reta/index'
export default function Card2({ linkImagem, titulo, icone }) {
    return (
        <div className={`${styles.card2}`}>
            <img src={linkImagem} alt="" srcset="" className={`${styles.banner}`}/>
            
            <div className={styles.legenda}>
                <LegendaR icone={icone} titulo={titulo}></LegendaR>
            </div>
        </div>
    )
}
