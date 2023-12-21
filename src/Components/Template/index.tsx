import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { titleType } from '../../Types';
import styles from "./style.module.css"
import { templates } from './TemplateData';
import { Link } from 'react-router-dom';

const Template = ({  id ,title,img,description}:titleType) => {
  return (
    <div className={styles.Template}>
     <div className={styles.image}><img src={img} alt="" /></div> 
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/Work/${id}`} >View Portfolio <TrendingFlatIcon/></Link>
    </div>
  )
}


export default Template
