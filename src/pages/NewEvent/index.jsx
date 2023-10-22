import React from 'react'
import styles from './styles.module.css'
import Sidebar from '../../components/Sidebar/index'
import Field from '../../components/FieldsNewEvents/index'
import EventCategory from '../../components/EventsCategorys/index'
import Navbar from '../../components/Navbar/index'
import Button from '../../components/LoginButton'
import { placeholder } from '@babel/types'
export default function NewEventPage() {
    console.log(window.innerWidth)
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar></Sidebar>
            </div>
            <div className={`${styles.navB}`}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.content}`}>
                <form>
                    <figure className={` weight-3 ${styles.figures}`}>
                        <label htmlFor="imagemInput" className={`text-1 weight-3 ${styles.label}`}>Imagem</label>
                        <input type="file" id="imagemInput" accept="image/*" />
                    </figure>
                    <div className={`${styles.fieldOut}`}>
                        <Field height="44px" width='100%' text={'Nome do evento'} id='event-name' />
                        <Field height="125px" width='100%' text={'Descrição'} id='event-desc' />
                    </div>
                    <div className={`${styles.dateContainer} `}>
                        <div className={`${styles.firstDate}`}>
                            <Field width="100%" type='date' height="44px" text={'Data evento'} id='event-date' />
                        </div>
                        <div className={`flex  ${styles.div2}`}>
                            <Field width="45%" type='time' height="44px" text={'Horário inicio'} id='event-start' />
                            <Field width="45%" type='time' height="44px" text={'Horário fim'} id='event-end' />
                        </div>

                    </div>


                    <div className={`flex   ${styles.address}`}>
                        <div className={`${styles.teste}`}>
                            <Field width="100%" height="39px" text={'Endereço'} id='event-add' />
                        </div>
                        <div className={styles.address2}>
                            <Field className={styles.inputAddres} width="45%" height="39px" text={'Número'} id='event-add-num' />
                            <Field className={styles.inputAddres} width="45%" height="39px" text={'CEP'} id='event-cep' />
                        </div>

                    </div>
                    <div className={`${styles.categoryContainer}`}>
                        <h1 className='text-3 weight-3'>Selecione pelo menos duas categorias</h1>
                        <div className={`flex ${styles.categoryBox}`}>
                            <div className='flex column justify-evenly'>
                                <EventCategory categoryName={'Esporte'} />
                                <EventCategory categoryName={'Esporte'} />
                                <EventCategory categoryName={'Esporte'} />
                            </div>
                            <div className='flex column justify-evenly'>
                                <EventCategory categoryName={'Educação'} />
                                <EventCategory categoryName={'Educação'} />
                                <EventCategory categoryName={'Educação'} />
                            </div>
                            <div className='flex column justify-evenly'>
                                <EventCategory categoryName={'Educação'} />
                                <EventCategory categoryName={'Educação'} />
                                <EventCategory categoryName={'Educação'} />
                            </div>
                            <div className='flex column justify-evenly'>
                                <EventCategory categoryName={'Corporativo'} />
                                <EventCategory categoryName={'Corporativo'} />
                                <EventCategory categoryName={'Corporativo'} />
                            </div>
                            <div className='flex column justify-evenly'>
                                <EventCategory categoryName={'Balada'} />
                                <EventCategory categoryName={'Balada'} />
                                <EventCategory categoryName={'Balada'} />
                            </div>
                            <div className='flex column justify-evenly'>
                                <EventCategory categoryName={'Esporte'} />
                                <EventCategory categoryName={'Esporte'} />
                                <EventCategory categoryName={'Esporte'} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className='' style={{ backgroundColor: 'rgba(57, 61, 94, 1)', width: '100%', height: '5vh' }} placeholder={'Enviar'}></Button>
                    </div>
                </form>
            </div >
        </div >
    )
}
