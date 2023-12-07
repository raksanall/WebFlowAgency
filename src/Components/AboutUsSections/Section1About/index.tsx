import styles from "./style.module.css"

const Section1About = () => {
  return (
    <div className="container"> 
     <div className={styles.Section1}>
      <div className="column">
<h6>About us</h6>
<h2>Our designs solve problems</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

      </div>
      <div className={styles.image}><img src="public/group-of-people-sitting-indoors-3184360.png" alt="" /></div>
    </div>
    </div>
   
  )
}

export default Section1About

