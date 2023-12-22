import { React } from 'react'
import Navbar from '../../components/Navbar/index'
import Sidebar from '../../components/Sidebar/index'
import styles from './styles.module.css'



export default function UserPage() {
    const handleClick = event => {
        
        if(document.getElementById('asd').disabled == true){
            document.getElementById('svgColor').style.fill = "green";
        }else{document.getElementById('svgColor').style.fill = "white";}

        for (const i of document.getElementsByClassName(styles.inputField) ) {
            if (i.disabled == true){
            i.disabled = false
            }else{
                i.disabled = true
            }
        }

        
    }
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar></Sidebar>
            </div>
            <div className={`${styles.navB}`}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.content}`}>
                <form onSubmitCapture={() => document.getElementById('mensagem').style.display = "flex"}> 
                    <div className={styles.banner}>
                        <div className={styles.icone}>
                            <img src="https://i.pinimg.com/474x/c5/03/66/c503667bebbc1276a391a44fd0649ab5.jpg" alt="" />
                        </div>
                        <div className={styles.titulos}>
                            <h1>Levi Renato</h1>
                            <h4 className={styles.gold}>Nível Ouro</h4>
                        </div>
                        <span className={styles.editButton} onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                             <path id='svgColor' d="M22 51c-1-1-4-1-4-1l-.425-1.274c-.362-1.086-1.215-1.939-2.301-2.301L14 46c0 0 .5-2.5-1-4l25-25 8 
                             10L22 51zM52 21l-9-9 4.68-4.68c0 0 3.5-1.5 7 2s2 7 2 7L52 21zM9 50l-1.843 4.476c-.614 1.49.877 2.981 2.367 2.367L14 55 9 50z"
                             fill='white'
                             ></path>
                            </svg>
                        </span>
                    </div>
                    <div className={styles.linha1}>
                       <input type="text" className={styles.inputField} disabled={true} defaultValue={`Levi`} id='asd'/>                    
                       <input type="text" className={styles.inputField} disabled={true} defaultValue={`Renato`}/>                    
                    </div>
                    <div className={styles.linha2}>
                       <input type="email" className={styles.inputField} disabled={true} defaultValue={`levirenato@gmail.com`}/>                                   
                    </div>
                    <div className={styles.linha1}>
                       <input type="password" className={styles.inputField} disabled={true} defaultValue={`sggfsga`}/>                                   
                       <input type="date" className={styles.inputField} disabled={true} defaultValue={`2000-07-31`}/>                                   
                    </div>
                    <h4 id="mensagem" className={styles.mensagem}>Informações salvas com sucesso!</h4>                   
                    <div className={styles.linha3}>
                       <button className={styles.salvar} >Salvar</button>                                  
                       <button className={styles.cancelar}>Cancelar</button>                                  
                    </div>
                </form>
            </div >
        </div >
    )
}
