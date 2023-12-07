import Blog from "../Blog"
import styles from "./style.module.css"
const Section7 = () => {
  return (
    <div className={styles.Section7} >
<div className="container">
    <h2>Our blog</h2>

    <div className={styles.RowBlogs}>
<Blog src="public/arabic-businessman-standing-on-street-and-using-laptop-9623794.png"/>
<Blog src="public/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png" />
<Blog src="public/apple-monitors-326518.png"/>
    </div>
</div>
    </div>
  )
}

export default Section7
