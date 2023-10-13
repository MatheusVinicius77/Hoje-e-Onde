import React from 'react'
import styles from './styles.module.css'
import Sidebar from '../../components/Sidebar/index'

export default function NewEventPage() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar></Sidebar>
            </div>
            <div className={`flex column align-center  ${styles.content}`}>
                <figure className={` weight-3 ${styles.figures}`}>
                    <label htmlFor="imagemInput" className={`text-1 weight-3 ${styles.label}`}>Imagem</label>
                    <input type="file" id="imagemInput" accept="image/*" />
                </figure>

            </div>
        </div>
    )
}
