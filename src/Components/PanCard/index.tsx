import styles from "./style.module.css"
import { buttonType } from "../../Types";

const PanCard = ({icon,title}:buttonType) => {
  return (

    <div className={styles.PanCard}>
        {icon}
      <h3>{title}</h3>
      <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
    </div>
  )
}

export default PanCard
