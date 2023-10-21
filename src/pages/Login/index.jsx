import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../../components/InputAuth/index'
import email from '../../assets/icons/email.svg'
import squareCheck from '../../assets/icons/square-check.svg'
import squareRegular from '../../assets/icons/square-regular.svg'
import Button from '../../components/LoginButton'
import password from '../../assets/icons/password.svg'
import logoProjeto from '../../assets/icons/Logo.svg'
import bg from '../../assets/bgAuth.svg'
import Categoria from '../../components/Sidebar/Filtros/Categorias/index'
export default function Login() {
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
                <div className={`${styles.login}`}>
                    <h1 className='title-2'>Entrar</h1>
                    <form className={`${styles.formAuth}`} action="#">
                        <Input placeholder={'Email'} type={'email'} img={email} ></Input>
                        <Input placeholder={'Senha'} type={'password'} img={password} ></Input>
                        <div className={`   ${styles.lembrarConta}`}>
                            <button onClick={handleButtonState} className='transparent' type="button"><img className='white' src={(buttonPressed) ? squareCheck : squareRegular} alt="" srcset="" /></button>
                            <p className="text-7 white-text-color"> lembrar da minha conta</p>
                        </div>
                        <Button className={styles.dale} style={{ width: '100%', height: '4vh' }} placeholder={'Entrar'}></Button>
                    </form>
                </div>
                <div className={`${styles.asideContent}`}>
                    <div className={`${styles.description}`}>
                        <img src={logoProjeto} alt="" srcset="" />
                        <h1 className='title-2'>HOJE É ONDE?</h1>
                        <p className={styles.p2}>O seu guia para os melhores eventos da cidade!</p>
                    </div>
                    <p className={styles.p2}>Não tem uma conta? <a href="">clique aqui</a></p>
                </div>
            </div>
        </div >
    )
}
