import styles from "./style.module.css"
import PanCard from "../../PanCard"
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QuizIcon from '@mui/icons-material/Quiz';
import TimerIcon from '@mui/icons-material/Timer';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Section5About = () => {
  return (
    <div className='container'>
        <div className={styles.Section5}>
             <h2>The benefits of working with us</h2>
      <div className={styles.RowPancards}>
<PanCard title="Customize with ease" icon={<QuizIcon/>}/>
<PanCard title="Perfectly Responsive" icon={<DesignServicesIcon/>}/>
<PanCard title="Friendly Support" icon={<GroupsIcon/>}/>
      </div>

      <div className={styles.RowforLogo}>
<div className={styles.Column}>
    <h3>100.000+</h3> <p>Finsweet Users</p>
</div>
<img src="Logo 1.png" alt="" />
<img src="Logo 2.png" alt="" />
<img src="Logo 3.png" alt="" />
<img src="Logo 4.png" alt="" />
<img src="Logo 5.png" alt="" />

      </div>
        </div>
       
    </div>
  )
}

export default Section5About
