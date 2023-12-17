import React from "react";
import styles from "./styles.module.css";

function Button({ onClick, style, placeholder }) {
    return (<button onClick={onClick} style={style} type="submit" className={`${styles.customButton}`}>{placeholder}</button>

    );
}
export default Button;