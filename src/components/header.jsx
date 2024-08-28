import styles from '../styles/header.module.css'
import { Link } from "react-router-dom"
import HamburgerMenu from './hamburgerMenu'
import githubIcon from '../images/github-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

export default function Header() {
    return (
      <header className={styles.header}>
        <nav className={styles.headerNav}>
            <div className={styles.navSocials}>
                <a href="https://github.com/krsawyer100" target='_BLANK' className={styles.socialsIcon}>
                    <img src={githubIcon} alt="Github Icon" className={styles.socialsIconImg} />
                </a>
                <a href="https://www.linkedin.com/in/kylee-sawyer/" target='_BLANK' className={styles.socialsIcon}>
                    <img src={linkedinIcon} alt="Linkedin Icon" className={styles.socialsIconImg} />
                </a>
            </div>
            <Link to="/" className={styles.navLogo}>
                <h1 className={styles.navLogoText}>Kylee's Designs</h1>
            </Link>
            <HamburgerMenu />
        </nav>
      </header>
    )
  }