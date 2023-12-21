import styles from "./styles.module.css"
import PanCard from "../../PanCard"
import GroupsIcon from '@mui/icons-material/Groups';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Section1Features = () => {
    return (
        <div className='container'>
            <div className={styles.Section1}>


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
                <h2>The benefits of working with our team</h2>
<div className={styles.Pancards}>
< PanCard title="Customize with ease" icon={<GroupsIcon/>}/>
< PanCard title="Perfectly Responsive" icon={<DesignServicesIcon/>}/>
< PanCard title="Friendly Support" icon={<AppRegistrationIcon/>} />

</div>


            </div>
        </div>
    )
}

export default Section1Features
