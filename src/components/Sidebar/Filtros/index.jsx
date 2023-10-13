import React, { useState } from 'react'
import Categoria from './Categorias'
import styles from './styles.module.css'
export default function Filtros() {

    const [buttonPressed, setButtonPressed] = useState(false);

    function handleButtonState(element) {
        if (buttonPressed) {
            setButtonPressed(false)
        } else {
            setButtonPressed(true)
        }
    }

    return (
        <div className={`bg-brand-2 ${styles.boxFiltro}`}>

            <div className={`${styles.filtros}`}><h1 className={`text-5 weight-3 ${styles.filtros}}`}>Filtros</h1></div>
            <h1 className={'text-3 weight-3'}>Distância</h1>
            <div className={` flex  ${styles.filtroDistancia} text-6`}>
                <p>1Km</p>
                <div className={` ${styles.finalizar}`}></div>
                <p>100Km</p>
            </div>
            <h1 className={`text-3 weight-3`}>Categorias</h1>

            <Categoria nome_categoria={'Verificado'}></Categoria>
            <Categoria nome_categoria={'Tecnologia'}></Categoria>
            <Categoria nome_categoria={'Cultural'}></Categoria>
            <Categoria nome_categoria={'Balada'}></Categoria>
            <Categoria nome_categoria={'Governo'}></Categoria>
            <Categoria nome_categoria={'Esporte'}></Categoria>
        </div>
    )
}
