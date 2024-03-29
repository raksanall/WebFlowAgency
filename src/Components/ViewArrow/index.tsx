import React from 'react'
import styles from "./style.module.css"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { buttonType } from '../../Types'

const ViewArrow = ({title,bg,border,p,fs,onClick}:buttonType) => {
  return (
   <button onClick={onClick}  className={styles.Button} style={{backgroundColor:bg,border:border,padding:p,fontSize:fs}}>{title} <TrendingFlatIcon />
   </button>
  )
}

export default ViewArrow
