import styles from "./style.module.css"
import { priceType } from "../../Types"
import { Link } from "react-router-dom"

const PriceCard = ({price,design,page,lorem,color,buttonTxt,btnColor,
  btnBg,cardBg}:priceType) => {
  return (
    <div style={{backgroundColor: cardBg ? cardBg : '#F4F6FC'}} className={styles.PriceCard}>
      <div className={styles.priceRow}>
        <h2>${price}</h2> <h6 style={{color:color}}>{design}</h6>
      </div>
      <h3>{page}</h3>
      <p className={styles.lorem}>{lorem}</p>
      <div className={styles.imageRow}>
        <img  src='/Pointer.png' alt="" /> <p>All limited links</p>
      </div>
      <div className={styles.imageRow}>
        <img  src='/Pointer.png' alt="" /> <p>Own analytics platform</p>
      </div>
      <div className={styles.imageRow}>
        <img  src='/Pointer.png' alt="" /> <p>Chat support</p>
      </div>
      <div className={styles.imageRow}>
        <img  src='/Pointer.png' alt="" /> <p>Optimize hashtags</p>
      </div>
      <div className={styles.imageRow}>
        <img  src='/Pointer.png' alt="" /> <p>Unlimited users</p>
      </div>
     
 <Link to="/ContactUs"><button style={{ backgroundColor: btnBg ? btnBg : '#282938', color: btnColor? btnColor : '#F4F6FC'}}>{buttonTxt}</button></Link> 
    </div>
  )
}

export default PriceCard
