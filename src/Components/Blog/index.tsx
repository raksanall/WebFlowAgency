import { titleType } from "../../Types"
import ViewArrow from "../ViewArrow"
import styles from "./style.module.css"

const Blog = ({src}:titleType) => {
  return (
    <div className={styles.Blog}>
      <img src={src} alt="" />
  <span>19 Jan 2022</span>
  <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
  <ViewArrow title="Read More" border="none" bg="transparent"/>
    </div>
  )
}

export default Blog
