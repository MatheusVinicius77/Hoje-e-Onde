import React, { useState } from 'react'
import styles from './style.module.css'
export default function EventCategory({ categoryName }) {
    const [btnPressed, setBtnPressed] = useState(false);
    function handleBtn() {
        if (!btnPressed) {
            setBtnPressed(true)
        } else {
            setBtnPressed(false)
        }
    }
    return (
        <button onClick={handleBtn} type='button' className={btnPressed ? ` ${styles.btnPressed} text-3 weight-3` : `${styles.btnCategory} text-3 weight-3`}>
            {categoryName}
        </button>
    )
}
