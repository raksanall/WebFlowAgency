import Blog from "../Blog"
import styles from "./style.module.css"
import { blogs } from "./blogsMockData"
import { titleType } from "../../Types"

const Section7 = () => {
  return (
    <div className={styles.Section7} >
      <div className="container">
        <h2>Our blog</h2>

        <div className={styles.RowBlogs}>
          {blogs.slice(0, 3).map(({id,title,date,description,img}:titleType)=> <Blog id={id} img={img} title={title} date={date} description={description} />)}
        
        </div>
      </div>
    </div>
  )
}

export default Section7
