import styles from "./style.module.css"
import { txtphotoType } from "../../Types"
const PhotoRight = ({src1,src2,toptext,maintext}:txtphotoType,) => {
  return (
    <div className={styles.PhotoRight}>
      <nav className={src1 ? styles.image : ''}>
  <img
    src={src1 ? src1 : ''}
    style={{ display: src1 ? 'block' : 'none' }}
    alt=""
  />
</nav>
      <div className={styles.column}>
<h6>{toptext}</h6>
<h3>{maintext}</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <nav className={src2 ? styles.image : ''}>
  <img
    src={src2 ? src2 : ''}
    style={{ display: src2 ? 'block' : 'none' }}
    alt=""
  />
</nav>
    </div>
  )
}
export default PhotoRight
