import React from "react";
import styles from "./styles.module.css";

function Button({placeholder}){
    return(<button type="button" className={`${styles.customButton}`}>{placeholder}</button>

    );
}
export default Button;