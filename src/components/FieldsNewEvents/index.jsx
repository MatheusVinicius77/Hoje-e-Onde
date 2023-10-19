import React, { useEffect } from 'react'
import styles from './styles.module.css'
export default function Field({ className, width = '465px', height = '0', type, text, id, fontSize = '17px', }) {
  useEffect(() => {
    let field = document.getElementById(id)
    field.style.width = width
    field.style.height = height
    field.style.fontSize = fontSize
  }, []);

  return (
    <div className={className} >
      <input id={id} name={id} required placeholder={text} className={`${styles.fields}`} type={type} accept="image/*" />
    </div>

  );
}
