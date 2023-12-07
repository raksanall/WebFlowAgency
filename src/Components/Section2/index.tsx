
import styles from "./style.module.css"
import ViewArrow from '../ViewArrow'
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
           <h3>Workhub office Webflow Webflow Design</h3>
           <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                <ViewArrow title="View More" border="none" bg="transparent"/>
            
            </div> 





            
            <div className={styles.column}>
               <div className={styles.Portfolio2}>
                <h3>Unisaas Website Design</h3>
                <ViewArrow title="View More" border="none" bg="transparent"/>
                </div> 

               <div className={styles.Portfolio3}></div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
