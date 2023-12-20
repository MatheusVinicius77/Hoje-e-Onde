import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../../components/InputAuth/index'
import email from '../../assets/icons/email.svg'
import squareCheck from '../../assets/icons/square-check.svg'
import squareRegular from '../../assets/icons/square-regular.svg'
import Button from '../../components/LoginButton'
import password from '../../assets/icons/password.svg'
import logoProjeto from '../../assets/icons/Logo.svg'
import { Link } from 'react-router-dom'
import bg from '../../assets/bgAuth.svg'
import Categoria from '../../components/Sidebar/Filtros/Categorias/index'
import { useNavigate } from 'react-router-dom'



export default function Login() {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [token, setToken] = useState(null);
    
    const navigate = useNavigate()
    const [buttonPressed, setButtonPressed] = useState(false);
    //  Função que rastreia se o algum botão das categorias foi presionado. 

    function handleButtonState() {
        if (buttonPressed) {
            setButtonPressed(false)
        } else {
            setButtonPressed(true)
        }
    }
    // autenticação
    const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": Email,/* value from email input */
              "senha":Password /* value from password input */
            }),
          });
      
          if (response.ok) {
            const data = await response.json();
            // Assuming the server returns a token upon successful authentication
            const authToken = data.token;
            setToken(authToken);
            // Redirect to the home page
            navigate('/home');
          } else {
            console.error('Authentication failed');
            // Handle authentication failure, show an error message, etc.
          }
          console.log(response.data)
        } catch (error) {
          console.error('Error during authentication:', error);
          // Handle other errors (network issues, etc.)
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.containerAuth}`}>
                <div className={`${styles.login}`}>
                    <h1 className='title-2'>Entrar</h1>
                    <form className={`${styles.formAuth}`} onSubmit={handleSubmit}>
                        <Input placeholder={'Email'} type={'email'} img={email} onChange={e => setEmail(e.target.value)}></Input>
                        <Input placeholder={'Senha'} type={'password'} img={password} onChange={e => setPassword(e.target.value)}></Input>
                        <div className={`   ${styles.lembrarConta}`}>
                            <button onClick={handleButtonState} className='transparent' type="button"><img className='white' src={(buttonPressed) ? squareCheck : squareRegular} alt="" srcset="" /></button>
                            <p className="text-7 white-text-color"> lembrar da minha conta</p>
                        </div>
                        <Button type="submit" className={styles.dale}  style={{ textAlign: 'center', width: '100%', height: '4vh' }} placeholder={'Entrar'}></Button>
                    </form>
                </div>
                <div className={`${styles.asideContent}`}>
                    <div className={`${styles.description}`}>
                        <img src={logoProjeto} alt="" srcset="" />
                        <h1 className='title-2'>HOJE É ONDE?</h1>
                        <p className={styles.p2}>O seu guia para os melhores eventos da cidade!</p>
                    </div>
                    <p className={styles.p2}>Não tem uma conta? <Link to={'/cadastro'}>clique aqui!</Link></p>
                </div>
            </div>
            <div className={`${styles.responsiveContainer}`}>
                <div className={`${styles.description}`}>
                    <img src={logoProjeto} alt="" srcset="" />
                    <h1 className='title-2'>HOJE É ONDE?</h1>
                    <div className={`${styles.login}`}>
                        <h1 className='title-2'>Entrar</h1>
                        <form className={`${styles.formAuth}`} onSubmit={handleSubmit}>
                            <Input className={styles.input} placeholder={'Email'} type={'email'} img={email} onChange={e => setEmail(e.target.value)}></Input>
                            <Input className={styles.input} placeholder={'Senha'} type={'password'} img={password} onChange={e => setPassword(e.target.value)} ></Input>
                            <div className={`${styles.lembrarConta}`}>
                                <button onClick={handleButtonState} className='transparent' type="button"><img className='white' src={(buttonPressed) ? squareCheck : squareRegular} alt="" srcset="" /></button>
                                <p className="text-7 white-text-color"> lembrar da minha conta</p>
                            </div>
                            <Button type="submit" style={{ width: '100%', height: '4vh' }} placeholder={'Entrar'}></Button>
                        </form>
                        <p className={styles.p2}>Não tem uma conta? <Link to={'/cadastro'}>clique aqui!</Link></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
