
import styles from "./style.module.css"
import { titleType } from '../../Types'
import ButtonYellow from '../ButtonYellow'
import ViewArrow from '../ViewArrow'

const HeaderBottom = ({ptitle,h2title,src}:titleType,) => {
  return (
    <div className={styles.HeaderBottom}>
      <div className="container"> <div className={styles.rowHeader}>
      <div className={styles.column}> 
      <h2>{h2title}</h2>
      <p>{ptitle}</p>
      <div className={styles.ButtonRow}>
        <ButtonYellow bg="#FCD980" br="41px" p="15px 40px" title="View our work"/>
        <ViewArrow fs="19px" title="View Pricing" bg="transparent" border="none" p="15px 40px" />
      </div>
      </div>
      <div className={styles.image}>
           <img src={src} alt="" />
      </div>
   
     </div> {/* row'un sonu */}
     </div>  {/* container'in sonu */}
   

    </div>
  )
}

export default HeaderBottom
