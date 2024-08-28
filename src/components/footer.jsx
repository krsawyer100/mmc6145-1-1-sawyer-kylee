import styles from '../styles/footer.module.css'
import { Link } from "react-router-dom"
import githubIcon from '../images/github-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <section className={styles.footerContent}>
            <nav className={styles.footerNav}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
                <Link to="/about" className={styles.navLink}>About</Link>
                <Link to="/contact" className={styles.navLink}>Contact</Link>
            </nav>
            <div className={styles.footerSocials}>
                <a href="https://github.com/krsawyer100" target='_BLANK' className={styles.socialIcons}>
                    <img src={githubIcon} alt="Github Icon" className={styles.socialIconsImg} />
                </a>
                <a href="https://www.linkedin.com/in/kylee-sawyer/" target='_BLANK' className={styles.socialIcons}>
                    <img src={linkedinIcon} alt="Linkedin Icon" className={styles.socialIconsImg} />
                </a>
            </div>
            <div className={styles.footerCopyright}>
                <p className={styles.copyrightText}>Designed by Kylee. Icons by <a href='https://icons8.com/' target='_BLANK'>Icons8</a></p>
            </div>
        </section>
      </footer>
    )
  }