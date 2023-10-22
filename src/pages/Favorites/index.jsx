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
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Filtros from '../../components/Sidebar/Filtros'
import { NavDropdown } from 'react-bootstrap'


export default function Favoritos() {
    return (
        <div className={`${styles.container}`}>
            {/* <div className={`${styles.sidebar}`}>
                <Sidebar></Sidebar>
            </div> */}
            <div className={`${styles.navB}`}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.content}`}>
                <div className={styles.titulo}>
                    <h1>Seus Favoritos</h1>

                </div>

                { /* CARDS*/}
                <Card
                    linkImagem="https://www.ceara.gov.br/wp-content/uploads/2019/08/190528_SEM-MAIS-INFANCIA_ARI2055.jpg"
                    fotoIcone="data:image/jpeg;base64,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"
                    titulo="Culto evengleico"
                    membros="1500"
                    distancia="12"
                    hora="12:00" />


                <Card
                    linkImagem="https://st2.depositphotos.com/1823785/7196/i/450/depositphotos_71969287-stock-photo-people-hands-holding-colorful-word.jpg"
                    fotoIcone="https://blog.portalpos.com.br/app/uploads/2023/07/pessoa-autentica-1024x717.jpg"
                    titulo="Como fazer eventos"
                    membros="1500"
                    distancia="12"
                    hora="12:00" />

                <Card
                    linkImagem="https://www.maracanau.ce.gov.br/wp-content/uploads/2022/12/mega-vacina.jpg"
                    fotoIcone="https://play-lh.googleusercontent.com/qn6t9aaqbxUJDl9SMRlBkgG6SArPRfk_g_m5lyG6SjhpUfiW1PsHuJ6jSuL9GVDqnA"
                    titulo="Campnha de Vacinação"
                    membros="1500"
                    distancia="12"
                    hora="12:00" />

                <Card
                    linkImagem="https://recnplay.pe/wp-content/uploads/2023/09/Capa_sympla-1.png"
                    fotoIcone="data:image/jpeg;base64,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"
                    titulo="Rec n Play"
                    membros="1500"
                    distancia="12"
                    hora="12:00" />

                <Card fotoIcone="https://imageproxyb.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/ef2eb4eaae02699baa4fe420137b225ab326c7744e49cf85760c4107b6952d6c_1.jpg"
                    linkImagem="https://noticias.maisesports.com.br/wp-content/uploads/2019/09/Campeonato-Brasileiro-League-of-Legends-LoL.jpg"
                    titulo="Campeonato Lol"
                    membros="1500"
                    distancia="12"
                    hora="12:00" />

                <Card fotoIcone="https://i.pinimg.com/550x/30/ff/ee/30ffeeece6b2e81936a54fc56c447649.jpg"
                    linkImagem="https://www.agendartecultura.com.br/wp-content/uploads/2019/10/batalharap-CAPA.jpg"
                    titulo="Batalha de Rap"
                    membros="30"
                    distancia="14"
                    hora="23:15" />

                <Card fotoIcone="data:image/png;base64,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"
                    linkImagem="https://portal.ifpe.edu.br/afogados/wp-content/uploads/sites/10/2023/09/banner-site-padrao-1.png"
                    titulo="Semana tecnologia IFPE"
                    membros="110"
                    distancia="100Km"
                    hora="08:00" />

                <Card fotoIcone="https://www.olinda.pe.gov.br/wp-content/uploads/2016/04/marca-prefeitura-de-olinda-google-amp-25042016-1.png"
                    linkImagem="https://www.olinda.pe.gov.br/wp-content/uploads/2023/02/olinda_carnaval_-680x363.jpg"
                    titulo="Esquente carnaval"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />

                <Card fotoIcone="https://www.olinda.pe.gov.br/wp-content/uploads/2016/04/marca-prefeitura-de-olinda-google-amp-25042016-1.png"
                    linkImagem="https://www.olinda.pe.gov.br/wp-content/uploads/2023/02/olinda_carnaval_-680x363.jpg"
                    titulo="Esquente carnaval"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />

                <Card fotoIcone="https://www.olinda.pe.gov.br/wp-content/uploads/2016/04/marca-prefeitura-de-olinda-google-amp-25042016-1.png"
                    linkImagem="https://www.olinda.pe.gov.br/wp-content/uploads/2023/02/olinda_carnaval_-680x363.jpg"
                    titulo="Esquente carnaval"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />


                <Card
                    linkImagem="https://osecretariodopovodorecife.com/blog/wp-content/uploads/2021/03/img-8187.jpg"
                    titulo="Protesto pela paz!!"
                    fotoIcone="https://i.pinimg.com/originals/31/be/06/31be06239ed25fc11dfda6924973f434.jpg"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />


                <Card
                    linkImagem="https://assets.3cket.com/promoters/4fc5384e08d241088aa67e99f327a737.png"
                    titulo="Bailão do Ibura so colar"
                    fotoIcone="https://gartic.com.br/imgs/mural/ga/galo_cego__/baile-de-favela.png"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />

                <Card
                    linkImagem="https://uploads.jovemnerd.com.br/wp-content/uploads/2020/08/RPG-Call-of-Cthulhu-e1608821961815.png"
                    titulo="Campanha do Dudão vem Nerd"
                    fotoIcone="https://images-americanas.b2w.io/produtos/1242131353/imagens/oculos-do-nerd-intelectual-fundo-de-garrafa-f/1242131361_1_large.jpg"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />

                <Card
                    linkImagem="https://storage.googleapis.com/grandchef-apps/gc3437/images/logo/icon-192x192.png"
                    titulo="Promoção do Gil"
                    fotoIcone="https://live.staticflickr.com/5507/11658029523_f93b06f545_z.jpg"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />

                <Card
                    linkImagem="https://oimparcial.com.br/app/uploads/2019/04/BASQUETE-DE-RUA.jpg"
                    titulo="Basquetão da massa"
                    fotoIcone="https://1.bp.blogspot.com/-eW5YwoQHN2s/UwXhiZ-CuQI/AAAAAAAAEhw/pg8JkD-Y3CU/s1600/1505309_544080092350393_1423345136_n.jpg"
                    membros="2000"
                    distancia="40Km"
                    hora="15:00" />

            </div>
        </div>
    )
}
