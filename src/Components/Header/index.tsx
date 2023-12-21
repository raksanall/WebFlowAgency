

import { useState } from "react";
import Navigation from "../../Navigation"
import { NavLink } from "react-router-dom"
import {routes} from "../../routes"
import styles from "./style.module.css"
import Hamburger from 'hamburger-react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.row}>
            <nav className={styles.Logo}><img src="/Logo.svg" alt="" /></nav>
          <Navigation/>
         <nav onClick={handleClick} className={styles.burger}>
           <Hamburger duration={0.9}/>
         </nav>

        </div>
        <div className={isMenuOpen ? `${styles.burgerMenu} ${styles.show}` : styles.burgerMenu}>
       
      {routes.map(({id,path,title})=>{
        return(
            <NavLink className={({isActive})=>isActive ? `${styles.navlink && styles.active}`: `${styles.navlink }`} 
            to={path}
            key={id}>
{title}
            </NavLink>
            );
            })}
            
  
          
   
      </div>
      </div>
    </div>
  )
}

export default Header