import React from 'react'
import styles from './styles.module.css'


export default function SidebarButton({ onClick, btnWidth, imgColor, btnHeigth, btnColor, fntSize, imgWidth, imgHeight, icone, texto }) {
    return (
        <button onClick={onClick} style={{ width: btnWidth, color: imgColor, height: btnHeigth, color: btnColor }} className={`flex transparent ${styles.button}`} type="button">
            <img style={{ width: imgWidth, height: imgHeight }} src={icone} alt="" />
            <h1 style={{ fontSize: fntSize }} className='text-5 weight-3'>{texto}</h1>
        </button>
    )
}