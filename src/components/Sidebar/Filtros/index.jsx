import React, { useState } from 'react'
import Categoria from './Categorias'
import styles from './styles.module.css'
import MultiRangeSlider from "multi-range-slider-react";
import './custom.css'
export default function Filtros() {


    return (
        <div className={`bg-brand-2 ${styles.boxFiltro}`}>
            <div className={`${styles.filtros}`}><h1 className={`text-5 weight-3 ${styles.filtros}}`}>Filtros</h1></div>
            <h1 className={`text-3 weight-3`}>Categorias</h1>
            <Categoria  nome_categoria={'Educação'}></Categoria>
            <Categoria  nome_categoria={'Tecnologia'}></Categoria>
            <Categoria  nome_categoria={'Cultural'}></Categoria>
            <Categoria  nome_categoria={'Show'}></Categoria>
            <Categoria  nome_categoria={'Governo'}></Categoria>
            <Categoria  nome_categoria={'Esporte'}></Categoria>
            <Categoria  nome_categoria={'Saúde'}></Categoria>

        </div>
    )
}
