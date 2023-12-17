import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function SidebarButton({ bgColor, onClick, btnWidth, imgColor, btnHeigth, btnColor, fntSize, imgWidth, imgHeight, icone, texto }) {
    let url = ''
    if (texto == 'Inicio') {
        url = '/home'
    } else if (texto == 'Favoritos') {
        url = '/favoritos'
    } else if (texto == 'Novo Evento') {
        url = '/newevent'
    }


    return (
        <Link style={{ textDecoration: 'none' }} className={styles.teste} to={url}>
            <button onClick={onClick} style={{ width: btnWidth, color: imgColor, height: btnHeigth, color: btnColor, backgroundColor: bgColor }} className={`flex transparent ${styles.button}`} type="button">
                <img style={{ width: imgWidth, height: imgHeight }} src={icone} alt="" />
                <h1 id={texto} style={{ fontSize: fntSize }} className='text-5 weight-3'>{texto}</h1>
            </button>
        </Link>

    )
}