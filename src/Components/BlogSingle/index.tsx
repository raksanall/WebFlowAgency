import { useParams } from "react-router";
import { blogs } from "../Section7/blogsMockData";
import { titleType } from "../../Types";
import styles from "./style.module.css"

const BlogSingle = () => {
    

  const {bId} =  useParams()
  console.log(bId);
  const currentBlog = bId ? blogs.find(({ id }) => Number(id) === Number(bId)):undefined;
  if (!currentBlog) {
    return <div>Blog not found</div>;
  }
  const { title, description, date, img }: titleType = currentBlog;
 
  return (
    <div className={styles.SinglePage}>
         <div className="container">
         <div className={styles.SingleBlog}>
     
      <h1>{title}</h1>
     <div className={styles.BlogImage}> <img src={img} alt={title} /></div>
      <p>{description}</p>
      <p>{date}</p>
      <div className={styles.contentColumn}>    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   <h3>Ut enim ad minim veniam, quis nostrud.</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
 </ul>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <img src="/photo-of-people-near-wooden-table-3184418.jpg" alt="" />
  </div>
  
    </div>
    </div>
    </div>
   
   
  )
}

export default BlogSingle
