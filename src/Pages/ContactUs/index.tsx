import styles from "./style.module.css"
const ContactUs = ({}) => {
  return (
    <div className="container">
      <div className={styles.ContactUs}>
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <form action="">
          <div className={styles.inputRows}>
              <div className="column">
          <h3>Name</h3>
          <input placeholder="Enter your name" type="text" />
        </div>
        <div className="column">
          <h3>Email</h3>
          <input placeholder="Enter your email" type="text" />
        </div>
          </div>
          <div className={styles.inputRows}>
              <div className="column">
          <h3>Subject</h3>
          <input placeholder="Provide context" type="text" />
        </div>
        <div className="column">
          <h3>Subject</h3>
          <input placeholder="Select subject" type="text" />
        </div>
          </div>
          <div className="column">
              <h3>Message</h3>
          <textarea name="" id="" placeholder="Write your  question here"></textarea>
          </div>
        
      


<button onClick={(e)=>{e.preventDefault();}} type="submit">Send Message</button>
        </form>

      </div>
     
    </div>
  )
}

export default ContactUs
