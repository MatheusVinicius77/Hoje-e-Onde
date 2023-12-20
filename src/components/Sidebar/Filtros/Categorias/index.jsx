import React, { useState, useContext, createContext } from 'react'
import styles from './styles.module.css'
import whiteSquare from '../../../../assets/icons/square-regular.svg'
import squareCheck from '../../../../assets/icons/square-check.svg'
import { appContext } from '../../../../App'


export default function Categoria({ nome_categoria, id }) {
    const context = useContext(appContext);
    const [buttonPressed, setButtonPressed] = useState(false);
    //  Função que rastreia se o algum botão das categorias foi presionado. 
    function handleButtonState(nome_categoria) {
        if (buttonPressed) {
            setButtonPressed(false)
            context.updateValue(nome_categoria)
        } else {
            setButtonPressed(true)
            context.updateValue(nome_categoria)

        }
    }





    return (
        <div>
            <div id={nome_categoria} className={`flex ${styles.categorias}`}>

                {buttonPressed ?
                    <button value={nome_categoria} onClick={() => handleButtonState(nome_categoria)} className={` transparent ${styles.buttonCategorias}`}>
                        {/* Caso o botão tenha sido pressionado, renderize a imagem do quadrado como Check, caso não, renderize o quadrado normal vazio */}
                        <img className={`bg-brand-1  ${styles.squareBlack}`} src={squareCheck} alt="xzc" />

                    </button>
                    :
                    <button value={nome_categoria} onClick={() => handleButtonState(nome_categoria)} className={` transparent ${styles.buttonCategorias}`}>
                        {/* Caso o botão tenha sido pressionado, renderize a imagem do quadrado como Check, caso não, renderize o quadrado normal vazio */}
                        <img className={` content-bg-color ${styles.square}`} src={whiteSquare} alt="xzc" />

                    </button>
                }
                <h1 className={`text-3 weight-3 `}>{nome_categoria}</h1>
            </div>
        </div>
    )
}
