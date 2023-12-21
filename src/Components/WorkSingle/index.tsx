
import { useParams } from "react-router"
import { templates } from "../Template/TemplateData"
import { titleType } from "../../Types"
import styles from "./style.module.css"

const WorkSingle = () => {

const {bId} =useParams();
console.log(bId);
const currentTemplate= bId ? templates.find(({ id }) => Number(id) === Number(bId)):undefined;
if (!currentTemplate) {
  return <div>Blog not found</div>;
}
const { title,img,description }: titleType = currentTemplate;

  return (
    <div className="container">
      <div className={styles.Section1}>
        <div className={styles.Column}>
           <h5>Web design and development</h5>
        <h2>Finsweet Design case studies - {title}</h2>
        <p>{description} Ut labore et dolore magna aliqua. Ut enim aris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
<div className={styles.image}><img src={img} alt="" /></div>
<div className={styles.row}>
  <div className="column"><h6>Client</h6><h5>facebook.com</h5></div>
  <div className="column"><h6>Product Design</h6><h5>Product Design</h5></div>
  <div className="column"><h6>UI Screens, UX Flow & Prototype</h6><h5>UI Screens, UX Flow & Prototype</h5></div>
</div><hr />
        </div>
       
      </div>
      <div className={styles.Section2}>
        <div className={styles.Column}>
        <h2>About the {title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
      <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
     </ul>
    <div className={styles.image}><img src={img} alt="" /></div> 
    <h2>How we do it</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
      <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
    </ul> </div>
  
     
      </div>
      
    </div>
  )
}

export default WorkSingle
