import styles from "./style.module.css"
import { titleType } from "../../Types"
import { useState } from "react"


const Line = ({number,title,ptitle}:titleType) => {
 
  const [showMenu,setShowMenu]=useState(false);
  const changeState= ()=>{
  setShowMenu(!showMenu)
  }

  return (
    <div className={styles.Line}>
        <div className={styles.ColumnForMain}>
            <div className={styles.Row1}> <h5>{number}</h5> <h3>{title}</h3> <b onClick={()=>changeState()} className={styles.plus}> {showMenu? "-" : "+"} </b></div>
            {showMenu && <div className={styles.Row2}><p>{ptitle}</p></div> }
            <hr />
        </div>
     
    </div>
  )
  
}







export default Line

