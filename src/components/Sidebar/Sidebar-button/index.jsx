import React from 'react'
import styles from './styles.module.css'


export default function SidebarButton({ icone, texto }) {
    return (
        <div>
            <button className={`flex transparent ${styles.button}`} type="button">
                <img src={icone} alt="" />
                <h1 className='text-5 weight-3'>{texto}</h1>
            </button>
        </div >
    )
}
