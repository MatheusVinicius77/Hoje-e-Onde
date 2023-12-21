import { React, useState, useEffect, createContext, useContext } from 'react'
import Navbar from '../../components/Navbar/index'
import Sidebar from '../../components/Sidebar/index'
import styles from './styles.module.css'
import Field from '../../components/FieldsNewEvents'
import Button from '../../components/LoginButton'

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { appContext } from '../../App'

const URL = 'http://localhost:3000/events'



export default function UserPage() {

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar page={'NewEvent'}></Sidebar>
            </div>
            <div className={`${styles.navB}`}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.content}`}>
                <form>
                    <div className={styles.banner}>
                        <div className={styles.icone}>
                            <img src="https://i.pinimg.com/474x/c5/03/66/c503667bebbc1276a391a44fd0649ab5.jpg" alt="" />
                        </div>
                        <div className="titulos">
                            <h1>Nome:</h1>
                            <h4>Nivel</h4>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}
