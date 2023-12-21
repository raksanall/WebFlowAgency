import { titleType } from "../../Types"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import styles from "./style.module.css"
import { Link } from "react-router-dom";

const Blog = ({  id ,title,img,description,date}: titleType) => {
  return (
    <div className={styles.Blog}>
      <img src={img} alt="" />
      <span>{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.rowarrow}>
        <Link to={`/Blog/${id}`}>Read More</Link><TrendingFlatIcon />
      
    </div>
    </div >
  )
}

export default Blog
