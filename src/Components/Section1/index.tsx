
import styles from "./style.module.css"
import ViewArrow from "../ViewArrow"

const Section1 = () => {
  return (
    <div className={styles.Section1}>
        <div className="container">
            <div className={styles.rowSection1}>
                   <div className={styles.column}>
                    <h2>How we work</h2>
                    <p className={styles.pcolumn}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
 <ViewArrow title="Get in touch with us" border="none" bg="transparent"/>
                   </div>
            <div className={styles.CardsRow}>
                <div className={styles.Card}>
                    <img src="Mask1.png" alt="" />
                    <h3>Strategy</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className={styles.Card}>
                    <img src="Mask2.png" alt="" />
                    <h3>Wireframing</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className={styles.Card}>
                    <img src="Mask3.png" alt="" />
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className={styles.Card}>
                    <img src="Mask4.png" alt="" />
                    <h3>Development</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
            </div>
            </div>
         
        </div>
      
    </div>
  )
}

export default Section1
