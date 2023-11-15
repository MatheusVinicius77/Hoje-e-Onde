import React from 'react'
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


export default function Homepage() {
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
                        <SwiperSlide>
                            <CardLx
                                linkImagem="https://www.ceara.gov.br/wp-content/uploads/2019/08/190528_SEM-MAIS-INFANCIA_ARI2055.jpg"
                                fotoIcone="data:image/jpeg;base64,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"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardLx
                                linkImagem="https://st2.depositphotos.com/1823785/7196/i/450/depositphotos_71969287-stock-photo-people-hands-holding-colorful-word.jpg"
                                fotoIcone="https://blog.portalpos.com.br/app/uploads/2023/07/pessoa-autentica-1024x717.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardLx
                                linkImagem="https://www.maracanau.ce.gov.br/wp-content/uploads/2022/12/mega-vacina.jpg"
                                fotoIcone="https://play-lh.googleusercontent.com/qn6t9aaqbxUJDl9SMRlBkgG6SArPRfk_g_m5lyG6SjhpUfiW1PsHuJ6jSuL9GVDqnA"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardLx
                                linkImagem="https://recnplay.pe/wp-content/uploads/2023/09/Capa_sympla-1.png"
                                fotoIcone="data:image/jpeg;base64,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"
                            />
                        </SwiperSlide>


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
                        <SwiperSlide>
                            <Card fotoIcone="https://imageproxyb.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/ef2eb4eaae02699baa4fe420137b225ab326c7744e49cf85760c4107b6952d6c_1.jpg"
                                linkImagem="https://noticias.maisesports.com.br/wp-content/uploads/2019/09/Campeonato-Brasileiro-League-of-Legends-LoL.jpg"
                                titulo="Campeonato Lol"
                                membros="1500"
                                distancia="12"
                                hora="12:00" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card fotoIcone="https://i.pinimg.com/550x/30/ff/ee/30ffeeece6b2e81936a54fc56c447649.jpg"
                                linkImagem="https://www.agendartecultura.com.br/wp-content/uploads/2019/10/batalharap-CAPA.jpg"
                                titulo="Batalha de Rap"
                                membros="30"
                                distancia="14"
                                hora="23:15" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card fotoIcone="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAADQCAMAAAAK0syrAAAA1VBMVEX///8vnkEAAADNGR4bmTIqnD242r38/PzNzc0imjcVmC7U6ddXrWTy8vKTyJsxMTHc3Nx8vYW/3sNLqFmr1LHj4+P4+PiwsLBISEhqamqOjo5UVFRwcHCpqalhYWHp6ek4ODjKAAAqKip8fHweHh6Ghoa8vLyenp6WlpbS0tK3t7cAlSSLi4uioqI+Pj4YGBjg7+JPT09otHPQLTH77+/bbnDMBxA7o0zx+PIPDw/wycrstrfmnp/55+jqrK3USkzhhojSPUHhiIrOIifaam2bzKJksW6a2VXBAAAMCklEQVR4nO2dC1ubSBfHWaoSo1RqDbkSIgmQi0m07bra7brt7tv9/h/pnTlnbsCgpmJuzv959inMgcn8YC5nzgyuZRkZGa2iL1///Pbw9a9NF2N9evj7EvXjm68kn2vETNca090miv5r+vr58vYd0+Xtg0g/rR8UVD8F08WsaDqon2yKYFV9u3yn6vJ3ln5e/02jOrznA53p+NMGKVbR9ywxYf4bDUdaroMjatOaDk83yfF8/ZknJszfwbKvyF+KxIT5KzXtK/L3Ww3y7Q9q2lNkX/eS2WveU2RNS4bX/I+1t8i/6+o10Wdrb5F/6Inf3fp7i/xvCfLlF4O8P8g/StryHlfsN9h9lQ1S3629RX6DrsgbdDjf4rTCenhzk8e3GCIoBoL+x9L3NxBUHu77Qxfu+wNMP3Xhvtl52S9soR5+XF5e3pL/Pv/jyFTn6KKgI2Y/KZourjdT+F/VX39++/7t4Q2F7o2M9kzOJ81o8xFXly50I9HFhgv8cr3XjbDH4FNczw417sZsx/rlok41WMTFoqbHvK9dlkE2yAbZIO+oDLJBNsgGeUdlkA2yQTbIOyqD/HaR69S0r8jv64dFHX+kpuuZxrQHsS/r/ceiPmGE8/y0aDrdpXUnIyOjvdbJ+6LYOHT3s2j6yb4MOtLctiMf0BzNjouafaCmu+ODoungGJg/aG/bjSH7v3Lva+W9Iof/bZblmfpFh3OXdwQZZINskA2yQTbIWyuDbJANskE2yAZ5a2WQDfJeIn861pX9kJpOtIGgGQT1DnVPakc+Gro+qBfFvv75NNOYEOtcY6of7MhylXNSFP+TTtdFE6e609zmlP2GkZHRGuQU9YhpD9rr3cdZvvOdzX7D1aX39UK/PKu/33CBX64POqfiED5fPZmVj8u7LLMjyCAbZIO8ozLIBtkgG+QdlUE2yAbZIO+oDLJB3ktk/U5d+GjoXI+889+T/NRtrK7DKsydznRc36H/O0WJLj4U9RNDtyca04edj/YZGRkZGRkZGRkZGRkZvVX5NSIPDhv0sNYQJk9Y6HVJenU1TkJxT0YkMaT/ErNTMPrSaMkfci3L1eWDCptX8bAzn7wGcsMm6sNhbIPEbq0eOeniocNstn2WhpZn50UuCei/TcJRMHrSiOrQs8SyEl0+VLWFSBmKB1UtcluWxLZjbhqKh+GOlGIN9cjN5yOP6VmtHPkmk9a0KlYR2eZVWyK31CKUvOXqkBe5xKqZNcjdPHINknvzeUxKc0PuaXWpaOI9HLUUZP8Gku4hJzCGZcg1yAfe6Qgu7fKfJRkPg2naz76D10O2aznkjixwOJZdDE09E2fNDBW+KnGmR0ZBteiJS7EK9bFHmcDJogpQqRwyPNclmgRymyb6+Tt9mhqJ0xzy4NnIoSwBVS/zJCe8aVSoHPIcqlUK5wJ5qK1dr4RsZ4wWvIPxixDzyiEPAcR26blAntOkQX60eB1kqNcj+SvQxd28EDKrHHIbyzOk5wI5xCYeZ+v26yBDNn35K2C9fzGmqhwy6TPveeuRgxR3RFL1ztdBTnMV2ZG1rirlkG9YVaKdpES22Ghh21N55+sgd/KPFn62Uhcsh0xHWHA8kgwylplKjib7hIwjYxbZ8vmoLVPWUrGtV6/YFBmHxg60YKUj4dAJP38V5CBzxruvSj9M0SGjm+yOs8jk2kgtzyrIWWP8CDL4HtKnQ2e3WvdLh4yvoRfkkbF0nHIV5FqmuoI3J6bCOldEultQ465ehJiXFtmCyWK7gGzR18z9hFWQoXsY8DOgEoN8Drmf6TC83BOoQnpkMa2jv+0vpo5SOnbJSshIGeBxrOZSQEavmtWIcJR5VtVIjyxmyBSZegP9+aTRmEZq/VwJGTpiu514XgKTTtEJFpAttLem5FKcR9oVh4NKkHkUAJDvbVW8Rq6EbI0yeahecx65EGOotiWXImO3Id+ylOhpV0MOM89toYw6eWRWm4U61cGilHDfla0MB+xZQ5yirbwdOYcEZDnnySGf5ZAtR8klMxkMZQn4pR156aBmVS13GMcx9isJOZKu3jSOhcVNhovR/aA9VrtOh9rlK6iRjIay1Y2JcZj9qTDoLZZn/TjJJislEPKTXitaDrrjavtqIyOj6rU9n7F7yzOhCOPKkUwZQZfcZymt7nCqTOvCkbzwDKKkDZbZotsLsuFC174nUubBLrk5yrm3a1JmJWJAU3pqypymZBYv5KJRmBlOC5m11dBZE9PkAAGDYsvahJ5AhsEkgyyDQ08g2yOlRrAs5CxxW5DB0cggp0p5hZgD8hSyWPlhgNQf8zIpG0Tu+C6KpgBygyVA5QTk0HVzfj8gdx3lVsis54TeFJfWRHumkfEWzVj4z5tGzjiEgJwJPgEytszGUtbPMPsmeWbog3WV6oDuaDq1xVrQLiGz2lwTh0VkjIlO1XzBsfdcWUF2ChkXrGAZ/lFkCDpwj3yMjb0l6sA2ImfWZjLIcAPMIYtTIgUZngzv2yNkTXk3Z20euWP5IEgB5BFoidPjDDLOpqkfhfFXvBLpRFt2MCriK79RY/WbTQ43jcwFxVEHKVwPyyDL2HpmkGqKzKJ+l41qc3ZHzO+nsQAWHNgpZOizqQtWgiwkps+iAVzJjLYWGVveam+ZKRKRAQhqJ8KODXxbkGEEybgicE0GGdfgRVvu+orPomYmQySQYdwhGov3vXHksaX8ibInBim5olIySLUbjaGoMlY+esjz3jyyoueMy+A3lntfsle3NLu9YKqyQ8jKCsojrkjCDyxleZ4Loqq7g9yAmDMG4h/zvsDFhi4L2v4yHYNSiP3S7n77kIvel0N32rKZFM6QHvO+QlG1wdkW+0TBRaEzUlc+unWrBJlLO19mw0/JfBnrc8qfB7xvEY8HB4x2frllmbWwMj2BrIuK8PI/igx+NXk4bo4IGoa3zcjF2FecXSguRcZFVCe/MQKcz842I6tveRnddNTFlhJk7oNAu+/x7UZc8CRGG0W2CuHl4t9PLftbqiVXqma/cCdP2Le/02pkZGRkZGRk9CyF3T5q2KxsE3Rykz590ebUUBzd6dOXP0uBPXz6os2JICfwXW0QVbZDdvuReYUeKR9SvEjbj8w3f8z56m/D8+TUxvfYIwk9T0n0PCVW5OE1oYcRIkDOXKDK8Tyx3cRXjtcmBTnBaWsSQSSAHob2gLb11LIHDgR0sFtq4H7iPuVs2s0aBgZcmjqi0IEdQ8SrRx+cxybDHi5XOjCNjmCRwIepeVT9rs3HpSDHEG6d083YnSUcE+TIHtkTi/7bHrcwZEAgbtJ0iDGsqd23Bx1S9qvIHsb3sN0ksCN7kXbwAolMz5zIvr+a92FhJLTtZSftyuW69SGzijuB6IiHMQynRaM1pFCj0GrQdSjY3hPDm2phFfCgu5tihQgInw+xjgmc0MbsRixDBXloL2h9H9OTFkY4m1V/WPAMZFguuiKvcOTQMNCQpwMyxnDYvyHEadtn2EoXNPA3RSKXRQFv6HpcwChr9J1nkB2OZ5+5Hn/Yvaq6zWdKGZe7tAQRKTpEZuj7CnmtlwtJwl9xvIg+hym+Kpdd2UZk1mOzr/rhGJAnSpRrzsP+NWVj+zpEkNOAiv09DcUzSSiyy8oO/3Dk5Kq/YGG8Kb4ibmHIzPu6J88vgzxVFihi/mAamu/DX1ON7GIMQW7dtKhuFjWKjIVha2oI5sE3BO3poByZdUjLIrJc0In5Gka4fmR1ZPQzp1pkckkfxu1FOTKLEtOWm0FOlDo85k3Yq/iDv6eUQyYcbH9aSqYZWuQp/8BiWY7c53k72A9a9MIzS5xYA7smmnCw5uW4PHLKgKaUVoscsG9Qpo+0ZcyzR5cpeMfWgkHqDOs8ZMzmMc5ozQNzHpl42oOJ5TTB09IiN8B3gG1OzVLk+4nlDjHrhT3wHK+Ljgnx1FLfmkR01CeXzcnxYM0ddhHZHWB/TfsWfffFPvHpjGmX28QFJ47cp/7Z3I7BacUxmG0gmWD1YRuzobPGzWF2q9KvlZ+WGwT57jIZ9vsdKK0fNLFjCfAjHz8I6HmNXDBuWGFA3qgXgAvioMVKAo+meU7a76csY5ccj0mDwOl4SM5itpMzHPf7w3W72EZGRtum/wPpIEasw8A/bAAAAABJRU5ErkJggg=="
                                linkImagem="https://portal.ifpe.edu.br/afogados/wp-content/uploads/sites/10/2023/09/banner-site-padrao-1.png"
                                titulo="Semana tecnologia IFPE"
                                membros="110"
                                distancia="100"
                                hora="08:00" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card fotoIcone="https://www.olinda.pe.gov.br/wp-content/uploads/2016/04/marca-prefeitura-de-olinda-google-amp-25042016-1.png"
                                linkImagem="https://www.olinda.pe.gov.br/wp-content/uploads/2023/02/olinda_carnaval_-680x363.jpg"
                                titulo="Esquente carnaval"
                                membros="2000"
                                distancia="40"
                                hora="15:00" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card fotoIcone="https://i.pinimg.com/550x/30/ff/ee/30ffeeece6b2e81936a54fc56c447649.jpg"
                                linkImagem="https://www.agendartecultura.com.br/wp-content/uploads/2019/10/batalharap-CAPA.jpg"
                                titulo="Batalha de Rap"
                                membros="30"
                                distancia="14"
                                hora="23:15" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card fotoIcone="https://i.pinimg.com/550x/30/ff/ee/30ffeeece6b2e81936a54fc56c447649.jpg"
                                linkImagem={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFfs8W7IenUr9I-M-Y_sH2Ag_rMYqAFSb_Q&usqp=CAU'}
                                titulo="DJ Azeitona SHOW"
                                membros="30"
                                distancia="14"
                                hora="23:15" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card fotoIcone="https://i.pinimg.com/550x/30/ff/ee/30ffeeece6b2e81936a54fc56c447649.jpg"
                                linkImagem={'data:image/png;base64,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'}
                                titulo="Vacinação Recife"
                                membros="30"
                                distancia="14"
                                hora="23:15" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card fotoIcone="https://i.pinimg.com/550x/30/ff/ee/30ffeeece6b2e81936a54fc56c447649.jpg"
                                linkImagem={'data:image/jpeg;base64,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'}
                                titulo="UFC 297"
                                membros="30"
                                distancia="14"
                                hora="23:15" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                { /* CARD PEQUENO */}
                <div className='cardPequeno'>
                    <h1 className={`title-1 ${styles.title}`}>Próximos a você</h1>
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
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://osecretariodopovodorecife.com/blog/wp-content/uploads/2021/03/img-8187.jpg"
                                titulo="Protesto pela paz!!"
                                fotoIcone="https://i.pinimg.com/originals/31/be/06/31be06239ed25fc11dfda6924973f434.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://assets.3cket.com/promoters/4fc5384e08d241088aa67e99f327a737.png"
                                titulo="Bailão do Ibura so colar"
                                fotoIcone="https://gartic.com.br/imgs/mural/ga/galo_cego__/baile-de-favela.png"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://uploads.jovemnerd.com.br/wp-content/uploads/2020/08/RPG-Call-of-Cthulhu-e1608821961815.png"
                                titulo="Campanha do Dudão vem Nerd"
                                fotoIcone="https://images-americanas.b2w.io/produtos/1242131353/imagens/oculos-do-nerd-intelectual-fundo-de-garrafa-f/1242131361_1_large.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://storage.googleapis.com/grandchef-apps/gc3437/images/logo/icon-192x192.png"
                                titulo="Promoção do Gil"
                                fotoIcone="https://live.staticflickr.com/5507/11658029523_f93b06f545_z.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://oimparcial.com.br/app/uploads/2019/04/BASQUETE-DE-RUA.jpg"
                                titulo="Basquetão da massa"
                                fotoIcone="https://1.bp.blogspot.com/-eW5YwoQHN2s/UwXhiZ-CuQI/AAAAAAAAEhw/pg8JkD-Y3CU/s1600/1505309_544080092350393_1423345136_n.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card2
                                linkImagem="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                                titulo="lorem"
                                fotoIcone="https://cdn0.br.psicologia-online.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_orig.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card2
                                linkImagem="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                                titulo="lorem"
                                fotoIcone="https://cdn0.br.psicologia-online.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_orig.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card2
                                linkImagem="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                                titulo="lorem"
                                fotoIcone="https://cdn0.br.psicologia-online.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_orig.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card2
                                linkImagem="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                                titulo="lorem"
                                fotoIcone="https://cdn0.br.psicologia-online.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_orig.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card2
                                linkImagem="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                                titulo="lorem"
                                fotoIcone="https://cdn0.br.psicologia-online.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_orig.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card2
                                linkImagem="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                                titulo="lorem"
                                fotoIcone="https://cdn0.br.psicologia-online.com/pt/posts/3/6/5/5_caracteristicas_de_uma_pessoa_boa_563_orig.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://oimparcial.com.br/app/uploads/2019/04/BASQUETE-DE-RUA.jpg"
                                titulo="Basquetão da massa"
                                fotoIcone="https://1.bp.blogspot.com/-eW5YwoQHN2s/UwXhiZ-CuQI/AAAAAAAAEhw/pg8JkD-Y3CU/s1600/1505309_544080092350393_1423345136_n.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://oimparcial.com.br/app/uploads/2019/04/BASQUETE-DE-RUA.jpg"
                                titulo="Basquetão da massa"
                                fotoIcone="https://1.bp.blogspot.com/-eW5YwoQHN2s/UwXhiZ-CuQI/AAAAAAAAEhw/pg8JkD-Y3CU/s1600/1505309_544080092350393_1423345136_n.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card2
                                linkImagem="https://oimparcial.com.br/app/uploads/2019/04/BASQUETE-DE-RUA.jpg"
                                titulo="Basquetão da massa"
                                fotoIcone="https://1.bp.blogspot.com/-eW5YwoQHN2s/UwXhiZ-CuQI/AAAAAAAAEhw/pg8JkD-Y3CU/s1600/1505309_544080092350393_1423345136_n.jpg"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>
        </div>
    )
}
