import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../styles/contactCard.module.css'
import githubIcon from '../images/github-icon.png'
import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

export default function ContactCard() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [stateMessage, setStateMessage] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!')
                    setIsSubmitting(false)
                    setTimeout(() => {
                        setStateMessage(null)
                    }, 5000)
                    e.target.reset()
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later')
                    setIsSubmitting(false)
                    setTimeout(() => {
                        setStateMessage(null)
                    }, 5000)
                }
            )
    }

    return (
        <div className={styles.contactCard}>
            <div className={styles.contactForm}>
                <h3>Contact Me</h3>
                <p>Feel free to contact me if you want to collaborate on a project or have any questions!</p>
                <form className={styles.contactFormMessage} onSubmit={sendEmail}>
                    {stateMessage && <p className={styles.confirmation}>{stateMessage}</p>}
                    <input type="text" id='name' name='name' placeholder='Name' required/>
                    <input type="email" id='email' name='email' placeholder='Email' required/>
                    <textarea id='message' name='message' placeholder='Message' required/>
                    <button type='submit' disabled={isSubmitting}>Send</button>
                </form>
            </div>
            <div className={styles.contactInfo}>
                <h4>Contact Info</h4>
                <div className={styles.contactInfoText}>
                    <img src={emailIcon} alt="" />
                    <a href='mailto:kyleesdesigns100@gmail.com'>kyleesdesigns100@gmail.com</a>
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