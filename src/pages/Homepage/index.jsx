import { React, useState, useEffect } from 'react'
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

const URL = 'http://localhost:3000/events'

export default function Homepage() {

    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setEventos(data))
            .catch(error => console.error('Erro:', error));
    }, [])

    const eventosGold = eventos.filter((evento) => evento.usuario.nivel_usuario === 1)
    const eventosSilver = eventos.filter((evento) => evento.usuario.nivel_usuario === 2)
    const eventosBronze = eventos.filter((evento) => evento.usuario.nivel_usuario === 3)
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar page={'Homepage'}></Sidebar>
            </div>
            <div className={`${styles.navB}`}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.content}`}>
                { /* CARD GRANDE */}
                <div className='cardGrande' >
                    <Swiper className={`swiper_container ${styles.carrosel}`}
                        effect={'coverflow'}
                        grabCursor={true}
                        slidesPerView={1.2}
                        spaceBetween={40}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
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


                <div className='cardMedio'>
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
                                        membros="1500"
                                        hora={data.getHours()}
                                        evento={evento}
                                    />
                                </SwiperSlide>
                            )

                        })}
                    </Swiper>
                </div>

                { /* CARD PEQUENO */}
                <div className='cardPequeno'>
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
