import styles from '../styles/hamburgerMenu.module.css'
import { Link } from "react-router-dom"
import { useState } from "react"

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log("Menu state: ", !menuOpen)
    }

    return (
        <>
            <button className={`${styles.navBtn} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Nav Menu" aria-expanded={menuOpen}>
                <div className={`${styles.navBtnLines} ${styles.line1}`}></div>
                <div className={`${styles.navBtnLines} ${styles.line2}`}></div>
                <div className={`${styles.navBtnLines} ${styles.line3}`}></div>
            </button>
            <div className={`${styles.navLinksContainer} ${menuOpen ? styles.open : ''}`} id="nav-menu" onClick={toggleMenu}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
                <Link to="/about" className={styles.navLink}>About</Link>
                <Link to="/contact" className={styles.navLink}>Contact</Link>
            </div>
        </>
    )
}