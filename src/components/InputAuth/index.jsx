import React from "react";

import styles from "./styles.module.css";

function Input({placeholder, img, type}){
    return (
    
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span className = {`input-group-text ${styles.span}`} id="basic-addon1"><img src={img} alt="" /></span>
        </div>
        <input className = {`form-control ${styles.input}`} type={type} placeholder={placeholder} aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    
    );
}

export default Input;