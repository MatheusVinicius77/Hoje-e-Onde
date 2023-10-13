import React, { useState } from 'react'
import Categoria from './Categorias'
import styles from './styles.module.css'
import MultiRangeSlider from "multi-range-slider-react";
import './custom.css'
export default function Filtros() {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <div className={`bg-brand-2 ${styles.boxFiltro}`}>
            <div className={`${styles.filtros}`}><h1 className={`text-5 weight-3 ${styles.filtros}}`}>Filtros</h1></div>
            <h1 className={'text-3 weight-3'}>Distância</h1>
            <div className={`flex align-center text-6 weight-3 ${styles.filtroDistancia} `}>
                <span>{minValue}km</span>
                <MultiRangeSlider
                    min={1}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    ruler={false}
                    label={false}
                    className={`${styles.customSlider}`}
                    barInnerColor='white'
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
                <span>{maxValue}km</span>
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
