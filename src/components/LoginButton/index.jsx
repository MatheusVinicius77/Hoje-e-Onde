import React from "react";
import styles from "./styles.module.css";

function Button({ style, placeholder }) {
    return (<button style={style} type="submit" className={`${styles.customButton}`}>{placeholder}</button>

    );
}
export default Button;