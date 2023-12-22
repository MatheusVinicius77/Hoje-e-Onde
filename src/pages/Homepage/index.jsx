import { React, useState, useEffect, createContext, useContext } from 'react'
import Navbar from '../../components/Navbar/index'
import Sidebar from '../../components/Sidebar/index'
import styles from './styles.module.css'
import Card from '../../components/Card/index'
import Card2 from '../../components/Card2/index'
import CardLx from '../../components/CardLX'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { appContext } from '../../App'

const URL = 'http://localhost:3000/events'



export default function Homepage() {

    const [eventos, setEventos] = useState([]);
    const [eventosPequisa, setEventosPesquisa] = useState([])

    function handlePesquisaEventos(e) {
        setEventosPesquisa([...e])
        setEventos([...e])
    }

    console.log(eventosPequisa, 'z')

    let filtros = []

    const eventosGold = eventos.filter((evento) => evento.usuario.nivel_usuario === 1)
    const eventosSilver = eventos.filter((evento) => evento.usuario.nivel_usuario === 2)
    const eventosBronze = eventos.filter((evento) => evento.usuario.nivel_usuario === 3)

    const context = useContext(appContext)
    filtros = [...context.value]
    let params = ''
    if (filtros.length === 1) {
        params = `?categoria[]=${filtros[0].toLowerCase()}`
        console.log('url: ' + URL + params)
    } else if (filtros.length > 1) {
        params = '?' + filtros.map((e) => `categoria=${e.toLowerCase()}`).join('&')
    }
    // events?categoria=show&categoria=cultura
    useEffect(() => {
        fetch(URL + params)
            .then(response => response.json())
            .then(data => setEventos(data))
            .catch(error => console.error('Erro:', error));

    }, [context])
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar page={'Homepage'} handlePesquisaEventos={handlePesquisaEventos}></Sidebar>
            </div>
            <div className={`${styles.navB}`} >
                <Navbar handlePesquisaEventos={handlePesquisaEventos}></Navbar>
            </div>
            <div className={`${styles.content}`}>
                { /* CARD GRANDE */}
                {(((filtros.length >= 1) || (eventosPequisa.length === 0)) && (eventosBronze.length + eventosSilver.length + eventosGold.length) == 0) ?
                    <h1 className="white-text-color">Não há evento para essa pesquisa ou filtro solicitado.</h1> : ''}
                <div style={{ display: (eventosGold.length !== 0) ? 'block' : 'none' }}>
                    <Swiper className={`swiper_container ${styles.carrosel}`}
                        effect={'coverflow'}
                        grabCursor={true}
                        slidesPerView={1.2}
                        spaceBetween={40}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={false}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}

                        breakpoints={{
                            660: {
                                slidesPerView: 1.4,
                                spaceBetween: 70,
                            },

                        }}


                        modules={[Autoplay, EffectCoverflow, Pagination]}
                    >

                        {eventosGold.map((evento) => {

                            const data = new Date(evento.data_evento)
                            return (
                                <SwiperSlide>
                                    <CardLx
                                        evento={evento}
                                        hora={data.getHours()}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>





                <div style={{ display: (eventosSilver.length !== 0) ? 'block' : 'none' }}>
                    { /* CARD MEDIO */}
                    <h1 className={`title-1 ${styles.title}`}>Eventos verificados</h1>
                    <Swiper className={`title-1 swiper_container ${styles.carrosel}`}
                        slidesPerView={1.4}
                        spaceBetween={'25vw'}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.8,
                                spaceBetween: '15vw',
                            },

                            790: {
                                slidesPerView: 2.5,
                                spaceBetween: '15vw',
                            },
                            1030: {
                                slidesPerView: 4,
                                spaceBetween: '15vw',
                            },

                        }}
                        navigation={true}
                        modules={[Navigation]}

                    >

                        {eventosSilver.map((evento) => {
                            const data = new Date(evento.data_evento)
                            return (
                                <SwiperSlide>
                                    <Card
                                        membros={evento.curtida}
                                        hora={data.getHours()}
                                        evento={evento}
                                    />
                                </SwiperSlide>
                            )

                        })}
                    </Swiper>
                </div>



                <div style={{ display: (eventosBronze.length !== 0) ? 'block' : 'none' }}>
                    <h1 className={`title-1 ${styles.title}`}>Eventos Gerais</h1>
                    <Swiper className={`swiper_container ${styles.carrosel}`}
                        slidesPerView={1.5}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{


                            350: {
                                slidesPerView: 2,
                                spaceBetween: '50vw',
                            },
                            500: {
                                slidesPerView: 2.5,
                                spaceBetween: '0',
                            },
                            700: {
                                slidesPerView: 3.5,
                                spaceBetween: '0',
                            },
                            900: {
                                slidesPerView: 4.5,
                                spaceBetween: '0',
                            },
                            1065: {
                                slidesPerView: 5.4,
                                spaceBetween: '0vw',
                            },

                            1220: {
                                slidesPerView: 6.5,
                                spaceBetween: '5vw',
                            },
                            1500: {
                                slidesPerView: 7.3,
                                spaceBetween: '1vw',
                                loop: false,
                            },
                            1700: {
                                slidesPerView: 8.6,
                                spaceBetween: '0vw',
                                loop: false,

                            },


                        }}
                    >
                        {eventosBronze.map((evento) => {

                            const data = new Date(evento.data_evento)

                            return (
                                <SwiperSlide>
                                    <Card2
                                        evento={evento}
                                        hora={data.getHours()}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>




            </div>
        </div>
    )
}
