import styles from "./style.module.css"
import { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { templates } from "../Template/TemplateData";
import Template from "../Template";



const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(({ category }) => category === selectedCategory);
  return (
    <div className={styles.Work}>
      <div className={styles.Section1}>
        <div className="container">
          <div className={styles.ColumnMain}>
            <h6>What we created</h6>
            <h2>Our Work Portfolio</h2>
            <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
            <div className={styles.icons}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className={styles.rowNames}>

            <div onClick={() => setSelectedCategory('all')}
              style={{ color: selectedCategory === 'all' ? '#2405F2' : 'black' }} > All </div>
               <div onClick={() => setSelectedCategory('Webflow Design')}
              style={{ color: selectedCategory === 'Webflow Design' ? '#2405F2' : 'black' }}   >  Webflow Design</div>
            <div onClick={() => setSelectedCategory('UI Design')}
              style={{ color: selectedCategory === 'UI Design' ? '#2405F2' : 'black' }}  >  UI Design</div>
            <div onClick={() => setSelectedCategory('Figma Design')}
              style={{ color: selectedCategory === 'Figma Design' ? '#2405F2' : 'black' }} >   Figma Design </div>
          </div>
          <div className={styles.Section2}>



            {filteredTemplates.map(({ id, title, description, img }) => (
              <Template key={id} id={id} img={img} title={title} description={description} />
            ))}

          </div>

        </div></div>
      <div className="container"><div className={styles.Section3}>
        <h2>Let's build something great together</h2>
        <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
        
        </div></div>


    </div>
  )
}

export default Work
