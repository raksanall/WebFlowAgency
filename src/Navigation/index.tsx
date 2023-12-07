
import { NavLink } from "react-router-dom"
import {routes} from "../routes"
import styles from "./style.module.css"
import "../App.css"
const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      {routes.map(({id,path,title})=>{
        return(
            <NavLink className={({isActive})=>isActive ? "navlink active": "navlink"} 
            to={path}
            key={id}>
{title}
            </NavLink>
            );
            })}
            
  
          
    </div>
  )
}

export default Navigation
