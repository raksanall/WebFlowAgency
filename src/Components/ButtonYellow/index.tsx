import React from 'react'
import { buttonType } from '../../Types'
import styles from "./style.module.css"

const ButtonYellow = ({title,bg,br,p}:buttonType) => {
  return (
   <button className={styles.ButtonYellow} style={{backgroundColor:bg,borderRadius:br,padding:p}}>{title}</button>
  )
}

export default ButtonYellow
