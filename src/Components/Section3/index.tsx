import styles from "./style.module.css"
import PanCard from "../PanCard"
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QuizIcon from '@mui/icons-material/Quiz';
import TimerIcon from '@mui/icons-material/Timer';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Section3 = () => {
  return (
    <div className={styles.Section3}>
        <div className="container"> 
        <div className={styles.column}>  <h3>Features</h3>
      <h2>Design that solves problems, one product at a time</h2>
      <div className={styles.PanCards}>

<PanCard title="Uses Client First" icon={<GroupsIcon/>}/>
<PanCard title="Two Free Revision Round" icon={<CheckCircleIcon/>}/>
<PanCard title="Template Customization" icon={<DesignServicesIcon/>}/>
<PanCard title="24/7 Support" icon={<QuizIcon/>}/>
<PanCard title="Quick Delivery" icon={<TimerIcon/>}/>
<PanCard title="Hands-on approach" icon={<AppRegistrationIcon/>}/>
      </div>
            </div>  
     </div>
   
    </div>
  )
}

export default Section3
