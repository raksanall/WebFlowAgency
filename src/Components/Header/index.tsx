
import Navigation from "../../Navigation"
import styles from "./style.module.css"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.row}>
            <div className={styles.Logo}><img src="Logo.svg" alt="" /></div>
          <Navigation/>
          <MenuOpenIcon/>
       

        </div>
      </div>
    </div>
  )
}

export default Header
