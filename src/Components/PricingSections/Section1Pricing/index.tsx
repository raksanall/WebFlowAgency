import styles from "./style.module.css"
import PriceCard from "../../PriceCard"

const Section1Pricing = () => {
  return (
    <div className={styles.Section1}>
      <div className="container ">
        <h2 className={styles.h2name}>Our Pricing Plans</h2>
        <p className={styles.pname}>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
<div className={styles.PriceRow}>

  <PriceCard buttonTxt="Get started" price="299" design="Per Design" page="Landing Page" lorem="When you’re ready to go beyond prototyping in Figma," color="blue"/>
  <PriceCard buttonTxt="Get started" price="399" design="Multi Design" page="Website Page " lorem="When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help." btnColor="black" btnBg="#FCD980" color="gold" cardBg="#1C1E53"/>
  <PriceCard buttonTxt="Contact us" price="499 + " design="Per Design" page="Complex Project" lorem="When you’re ready to go beyond prototyping in Figma," color="blue"/>
 
</div>

      </div>
    </div>
  )
}

export default Section1Pricing
