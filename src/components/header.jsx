import styles from '../styles/header.module.css'
import { Link } from "react-router-dom"
import githubIcon from '../images/github-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'
import { useState } from "react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
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
                        <img src="" alt="" className={styles.navLogoImg}/>
                        <h1 className={styles.navLogoText}>Kylee's Designs</h1>
                    </Link>
                    <button className={`${styles.navBtn} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Nav Menu" aria-expanded={menuOpen}>
                        <div className={`${styles.navBtnLines} ${styles.line1}`}></div>
                        <div className={`${styles.navBtnLines} ${styles.line2}`}></div>
                        <div className={`${styles.navBtnLines} ${styles.line3}`}></div>
                    </button>
                </nav>
            </header>
            <div className={`${styles.navLinksContainer} ${menuOpen ? styles.open : ''}`} id="nav-menu" onClick={toggleMenu}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
                <Link to="/about" className={styles.navLink}>About</Link>
                <Link to="/contact" className={styles.navLink}>Contact</Link>
            </div>
      </>
    )
  }