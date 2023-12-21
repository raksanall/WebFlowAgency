import Blog from "../../Blog"
import styles from "./style.module.css"
import { blogs } from "../../Section7/blogsMockData"
import { titleType } from "../../../Types"

const Section2Blog = () => {
  return (
    <div className='container'>
        <div className={styles.Section2}>
<h2>Our Blog</h2>
<div className={styles.RowBlogs}>

{blogs.slice(3,10).map(({id,title,date,description,img}:titleType)=> <Blog id={id} img={img} title={title} date={date} description={description} />)}
</div>

        </div>
    </div>
  )
}

export default Section2Blog
