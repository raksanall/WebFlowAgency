import styles from "./style.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Section6About = () => {
  return (
    <div className={styles.Section6}>
      <div className="container">
<h2>Meet our team</h2>
<div className={styles.RowTeams}>

    <div className={styles.team1} >
<div className={styles.image}>  <p className={styles.layout}></p>  <div className={styles.icons}><FacebookIcon/><TwitterIcon/><LinkedInIcon/> </div></div>
   <h3>John Smith</h3>
   <p>CEO</p>
    </div>

    <div className={styles.team2}>
<div className={styles.image}>  <p className={styles.layout}></p>  <div className={styles.icons}><FacebookIcon/><TwitterIcon/><LinkedInIcon/> </div></div>
   <h3>Simon Adams</h3>
   <p>CTO</p>
    </div>

    <div className={styles.team3}>
<div className={styles.image}>  <p className={styles.layout}></p>  <div className={styles.icons}><FacebookIcon/><TwitterIcon/><LinkedInIcon/> </div></div>
   <h3>Paul Jones</h3>
   <p>Design Lead</p>
    </div>

    <div className={styles.team4}>
<div className={styles.image}>  <p className={styles.layout}></p>  <div className={styles.icons}><FacebookIcon/><TwitterIcon/><LinkedInIcon/> </div></div>
   <h3>Sara Hardin</h3>
   <p>Project Manager</p>
    </div>



</div>
      </div>
    </div>
  )
}

export default Section6About
