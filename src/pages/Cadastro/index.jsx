import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../../components/InputAuth/index'
import email from '../../assets/icons/email.svg'
import Button from '../../components/LoginButton'
import password from '../../assets/icons/password.svg'
import logoProjeto from '../../assets/icons/Logo.svg'
import calendar from '../../assets/icons/calendar.svg'
import user from '../../assets/icons/circleUser.svg'
export default function Cadastro() {
    const [buttonPressed, setButtonPressed] = useState(false);
    //  Função que rastreia se o algum botão das categorias foi presionado. 
    function handleButtonState() {
        if (buttonPressed) {
            setButtonPressed(false)
        } else {
            setButtonPressed(true)
        }
    }
    return (
        <div className={styles.container}>
            <div className={`${styles.containerAuth}`}>
                <div className={`${styles.asideContent}`}>
                    <div className={`${styles.description}`}>
                        <img src={logoProjeto} alt="" srcset="" />
                        <h1 className='title-2'>HOJE É ONDE?</h1>
                        <p className={styles.p2}>O seu guia para os melhores eventos da cidade!</p>
                    </div>
                    <p className={styles.p2}>Já tem uma conta? <a href="">clique aqui</a></p>
                </div>
                <div className={`${styles.login}`}>
                    <h1 className='title-2'>Criar conta</h1>
                    <form className={`${styles.formAuth}`} action="#">
                        <Input className={styles.userLogo} placeholder={'Nome'} type={'text'} img={user} ></Input>
                        <Input placeholder={'Email'} type={'email'} img={email} ></Input>
                        <Input placeholder={'Senha'} type={'password'} img={password} ></Input>
                        <Input placeholder={'Data de nascimento'} type={'date'} img={email} ></Input>
                        <Button className={styles.dale} style={{ width: '100%', height: '4vh' }} placeholder={'Criar conta'}></Button>
                    </form>
                </div>

            </div>
            <div className={`${styles.responsiveContainer}`}>
                <div className={`${styles.description}`}>
                    <img src={logoProjeto} alt="" srcset="" />
                    <h1 className='title-2'>HOJE É ONDE?</h1>
                    <div className={`${styles.login}`}>
                        <h1 className='title-2'>Criar conta</h1>
                        <form className={`${styles.formAuth}`} action="#">
                            <Input className={styles.userLogo} placeholder={'Nome'} type={'text'} img={user} ></Input>
                            <Input placeholder={'Email'} type={'email'} img={email} ></Input>
                            <Input placeholder={'Senha'} type={'password'} img={password} ></Input>
                            <Input placeholder={'Data de nascimento'} type={'date'} img={email} ></Input>
                            <Button className={styles.dale} style={{ width: '100%', height: '4vh' }} placeholder={'Criar conta'}></Button>
                        </form>
                    </div>
                    <p className={styles.p2}>Já tem uma conta? <a href="">clique aqui</a></p>

                </div>
            </div>
        </div >
    )
}
