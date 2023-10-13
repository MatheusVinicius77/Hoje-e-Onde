import React, { useState } from 'react'
import styles from './styles.module.css'
import whiteSquare from '../../../../assets/icons/square-regular.svg'
import squareCheck from '../../../../assets/icons/square-check.svg'


export default function Categoria({ nome_categoria }) {
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
        <div>
            <div className={`flex ${styles.categorias}`}>
                <button onClick={() => handleButtonState()} className={` transparent ${styles.buttonCategorias}`}>
                    {/* Caso o botão tenha sido pressionado, renderize a imagem do quadrado como Check, caso não, renderize o quadrado normal vazio */}
                    {buttonPressed ? <img className={`bg-brand-1  ${styles.squareBlack}`} src={squareCheck} alt="xzc" /> : <img className={` content-bg-color ${styles.square}`} src={whiteSquare} alt="xzc" />}

                </button>
                <h1 className={`text-3 weight-3 `}>{nome_categoria}</h1>
            </div>
        </div>
    )
}
