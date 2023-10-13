import React, { useState } from 'react'
import SidebarButton from './Sidebar-button'
import favorito from '../../assets/icons/favorito.svg'
import logoInicio from '../../assets/icons/explore.svg'
import newEvent from '../../assets/icons/new-event.svg'
import search from '../../assets/icons/Search.svg'
import user1 from '../../assets/userIcons/user1.svg'
import styles from './styles.module.css'
import Filtros from './Filtros'
import logo from '../../assets/icons/Logo.svg'


export default function Sidebar() {
    return (
        <div className={`bg-brand-1  ${styles.sidebar}`}>
            <div className={` align-center flex ${styles.userInfo}`}>
                <img className={` ${styles.userImg}`} src={user1} alt="" />
                <h1 className='text-4 weight-3'>usuario sobrenome</h1>
            </div>
            <div className={`flex column ${styles.formSearch}`}>
                <form className={`form-inline  ${styles.searchBar}`}>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button className={`${styles.buttonSearch} transparent `}><span className={`transparent input-group-text border-right-0 rounded-0`} id="basic-addon1"><img src={search} alt="" /></span></button>
                        </div>
                        <input className={`transparent ${styles.teste} weight-1 border-left-0 form-control rounded-0 `} type="text" placeholder="Pesquisar" aria-label="Pesquisa" aria-describedby="basic-addon1" />
                    </div>
                </form>
                <nav className={`${styles.nav}`} >
                    <SidebarButton icone={logoInicio} texto={'Inicio'} />
                    <SidebarButton icone={favorito} texto={'Favoritos'} />
                    <SidebarButton icone={newEvent} texto={'Novo Evento'} />
                </nav>
                <div className={`${styles.campoFiltros}`}>
                    <Filtros></Filtros>
                </div>


            </div>
            <footer className={` flex align-center ${styles.footer}`}>
                <img src={logo} alt="" />
                <h1 className={`text-5 weight-3 ${styles.logo}`} >Hoje é onde?</h1>
            </footer>
        </div >
    )
}
