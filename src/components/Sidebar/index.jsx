import React, { useState, useEffect } from 'react'
import SidebarButton from './Sidebar-button'
import favorito from '../../assets/icons/favorito.svg'
import logoInicio from '../../assets/icons/explore.svg'
import newEvent from '../../assets/icons/new-event.svg'
import search from '../../assets/icons/Search.svg'
import user1 from '../../assets/userIcons/user1.svg'
import styles from './styles.module.css'
import Filtros from './Filtros'
import logo from '../../assets/icons/Logo.svg'
import hamburguer from '../../assets/icons/hamburguer.svg'
import sliders from '../../assets/icons/sliders.svg'
import discover2 from '../../assets/icons/discover2.svg'


export default function Sidebar() {

    const [larguraTela, setLarguraTela] = useState(false)
    const [btnPressed, setBtnPressed] = useState(false);
    function HandleClick() {
        let sidebar = document.getElementById('sidebar')
        if (btnPressed) {
            sidebar = document.getElementById('sidebar')
            if (larguraTela <= 500) {
                sidebar.classList.remove(`${styles.responsiveSidebar}`)
                sidebar.classList.add(`${styles.sidebar}`)
                sidebar.style.width = '250px'
            }
            sidebar.style.width = '250px'

            setBtnPressed(false)
        } else {
            setBtnPressed(true)
            sidebar = document.getElementById('sidebar')
            sidebar.classList.add(`${styles.responsiveSidebar}`)
            sidebar.classList.remove(`${styles.sidebar}`)
            sidebar.style.width = '100px'

        }
    }

    const logWindowWidth = () => {
        setLarguraTela(window.innerWidth)
        console.log(`Largura da tela: ${window.innerWidth}px`);
        if (window.innerWidth <= 500) {
            HandleClick()
            console.log(btnPressed)
        }
    };

    useEffect(() => {
        let sidebar = document.getElementById('sidebar')
        logWindowWidth();
        window.addEventListener('resize', logWindowWidth);
        return () => {
            window.removeEventListener('resize', logWindowWidth);

        };
    }, []);


    return (

        <div id='sidebar' className={`  bg-brand-1  ${styles.sidebar}`}>

            <div className={(btnPressed) ? ` align-center flex column ${styles.userInfoResponsive}` : ` align-center flex column ${styles.userInfo}`}>
                <button id='btnHamb' onClick={HandleClick} type="button" className={`${styles.btnHamburguer}`}><img src={hamburguer} alt="" /></button>
                <figure id='figure1' className={`${styles.figure1}`} onClick={HandleClick}>
                    <img id='logo-user' className={` ${styles.userImg}`} src={user1} alt="" />
                    {(btnPressed) ? '' : <h1 className='text-4 weight-3'>usuario sobrenome</h1>}
                </figure>


            </div>
            <div id='formSearchResponsive' className={(btnPressed) ? `flex column ${styles.formSearchResponsive}` : `flex column ${styles.formSearch}`}>
                {(btnPressed) ? < SidebarButton onClick={HandleClick} imgWidth={'50px'} id={'2'} icone={search} /> :
                    <form className={`form-inline`}>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button className={`${styles.buttonSearch} transparent `}><span className={`transparent input-group-text border-right-0 rounded-0`} id="basic-addon1"><img src={search} alt="" /></span></button>
                            </div>
                            <input className={`transparent ${styles.inputSearch} weight-1 border-left-0 form-control rounded-0 `} type="text" placeholder="Pesquisar" aria-label="Pesquisa" aria-describedby="basic-addon1" />
                        </div>
                    </form>
                }
                {(btnPressed) ?
                    <nav onClick={HandleClick} className={(btnPressed) ? ` flex column ${styles.navResponsive}` : `${styles.nav}`} >
                        <SidebarButton imgWidth={'50px'} id={'2'} icone={discover2} texto={(btnPressed) ? '' : 'Inicio'} />
                        <SidebarButton imgWidth={'50px'} id={'3'} icone={favorito} texto={(btnPressed) ? '' : 'Favoritos'} />
                        <SidebarButton imgWidth={'50px'} id={'4'} icone={newEvent} texto={(btnPressed) ? '' : 'Novo Evento'} />
                    </nav>
                    :
                    <nav className={`${styles.nav}`} >
                        <SidebarButton id={'2'} icone={logoInicio} texto={'Inicio'} />
                        <SidebarButton id={'3'} icone={favorito} texto={'Favoritos'} />
                        <SidebarButton id={'4'} icone={newEvent} texto={'Novo Evento'} />
                    </nav>
                }
                {(btnPressed) ?
                    <SidebarButton onClick={HandleClick} imgWidth={'50px'} imgColor={'white'} id={'2'} icone={sliders} />
                    :
                    <div className={`${styles.campoFiltros}`}>
                        <Filtros></Filtros>
                    </div>
                }
            </div>
            <footer id='responsiveFooter' className={(btnPressed) ? ` flex align-center ${styles.responsiveFooter}` : ` flex align-center ${styles.footer}`}>
                <img src={logo} alt="" />
                {(btnPressed) ? '' : <h1 className={`text-5 weight-3 ${styles.logo}`} >Hoje é onde?</h1>}
            </footer>
        </div >
    )
}
