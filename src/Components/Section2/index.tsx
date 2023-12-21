
import styles from "./style.module.css"
import ViewArrow from '../ViewArrow'
import { Link } from "react-router-dom"
const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <div className="container">
        <div className={styles.row}>
            <h2>View our projects</h2>
<ViewArrow title="View More" border="none" bg="transparent"/>
        </div>
        <div className={styles.mainRow}>

           <div className={styles.Portfolio1}>
            <div className={styles.Absolute}>
               <h3>Workhub office Webflow Webflow Design</h3>
           <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
           <Link to="/Work"> <ViewArrow title="View More" border="none" bg="transparent"/></Link>
            </div>
            <img src="/Portfolio1.png" alt="" />
            </div> 

            <div className={styles.column}>
               <div className={styles.Portfolio2}>
              
              <div className={styles.Absolute2}><h3>Unisaas Website Design</h3>
                <Link to="/Work"><ViewArrow title="View More" border="none" bg="transparent"/></Link></div> 
                <img src="/Portfolio2.png" alt="" />
                </div> 

               <div className={styles.Portfolio3}>
             
               <div className={styles.Absolute3}></div> 
                <img src= "public/Portfolio3.png" alt="" />
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
