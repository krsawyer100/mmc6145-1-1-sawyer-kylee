import styles from '../styles/contactCard.module.css'
import githubIcon from '../images/github-icon.png'
import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

export default function ContactCard() {
    return (
        <div className={styles.contactCard}>
            <div className={styles.contactForm}>
                <h3>Contact Me</h3>
                <p>Feel free to contact me if you want to collaborate on a project or have any questions!</p>
                <form className={styles.contactFormMessage}>
                    <input type="text" id='name' name='name' placeholder='Name'/>
                    <input type="email" id='email' name='email' placeholder='Email'/>
                    <textarea id='message' name='message' placeholder='Message'/>
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className={styles.contactInfo}>
                <h4>Contact Info</h4>
                <div className={styles.contactInfoText}>
                    <img src={emailIcon} alt="" />
                    <a href='mailto:kyleereneesawyer@gmail.com'>kyleereneesawyer@gmail.com</a>
                </div>
                <div className={styles.contactInfoText}>
                    <img src={linkedinIcon} alt="Github Icon" />
                    <a href='https://www.linkedin.com/in/kylee-sawyer/' target='_BLANK'>LinkedIn</a>
                </div>
                <div className={styles.contactInfoText}>
                    <img src={githubIcon} alt="Github Icon" />
                    <a href='https://github.com/krsawyer100' target='_BLANK'>Github</a>
                </div>
            </div>
            <div className={styles.contactGreen}></div>
        </div>
    )
}