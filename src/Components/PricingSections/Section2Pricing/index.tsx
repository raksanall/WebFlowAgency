import Line from "../../Line"
import { Link } from "react-router-dom"
import styles from "./style.module.css"
const Section2Pricing = () => {
  return (
    <div className={styles.Section2}>
      <div className="container">
        
       <div className= {styles.RowMain}>
       <div className= {styles.ColumnLeft}>
        <h2>Frequently asked questions</h2>
        <Link to="/ContactUs">Contact us for more info</Link>
       </div>
       <div className= {styles.LinesColumn}>
<Line number="01" title="How much time does it take?" ptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
<Line number="02" title="What is your class naming convention?" ptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
<Line number="03" title="How do you communicate?" ptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
<Line number="04" title="I have a bigger project. Can you handle it?" ptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
<Line number="05" title="What is your class naming convention?" ptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>

       </div>
       </div>
       
      </div>
    </div>
  )
}

export default Section2Pricing
