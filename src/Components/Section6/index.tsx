import styles from "./style.module.css"
import ViewArrow from "../ViewArrow"
const Section6 = () => {
  return (
    <div className={styles.Section6}>
      <div className="container">
        <div className={styles.MainDiv}>
          <div className={styles.LeftDiv}>
            <h2>Building stellar websites for early startups</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>

          </div>
          <div className={styles.RightDiv}>
            <h4>Send inquiry</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
<form >
<input type="text" placeholder="Your Name"/>
<input type="text" placeholder="Email"/>
<input type="text" placeholder="Paste your Figma design URL"/>
<button type="submit">Send an Inquiry</button>
<ViewArrow title="Get in touch with us" border="none" bg="transparent"/>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
