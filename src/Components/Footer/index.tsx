import styles from "./style.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterBottom from "./FooterBottom";


const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className="container">
            <div className={styles.MainRow}>
                   <div className={styles.LeftColumn}>

            <div className="Logo"><img src="Logo.svg" alt="" /></div>
            <p>We are always open to discuss your project and improve your online presence.</p>
            <div className={styles.ContactRows}>
                <div className="column"> <h5>Email me at</h5>  <a href="">contact@website.com</a> </div>
                <div className="column">   <h5>Call us</h5>    <a href="">0927 6277 28525</a>       </div>
            </div>
        </div>
        <div className={styles.RightColumn}>
            <h3>Lets Talk!</h3>
            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <div className="row">
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>

            </div>
        </div>
            </div>
          <FooterBottom/>
        </div>
       
      
    </div>
  )
}

export default Footer
