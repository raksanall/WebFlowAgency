import styles from "./style.module.css"
import "../../../App.css"

const Section2About = () => {
  return (
    <div className="container">
        <div className={styles.Section2}>
<div className={styles.RowForColumns}>
    <div className="column">
        <h6>Who we are</h6>
        <h2>Goal focussed</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="column">
        <h2>Continuous improvement</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</div>
<div className={styles.Image}><img src="public/man-in-blue-jacket-looking-at-white-board-7413916.png" alt="" /></div>
        </div>
      
    </div>
  )
}

export default Section2About
