import { buttonType } from '../../Types'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'

const ButtonYellow = ({title,bg,br,p,To}:buttonType) => {
  return (
   <Link to={To} className={styles.ButtonYellow} style={{backgroundColor:bg,borderRadius:br,padding:p}}>{title}</Link>
  )
}

export default ButtonYellow
