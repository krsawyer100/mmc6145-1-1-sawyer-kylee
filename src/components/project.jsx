import styles from '../styles/project.module.css'

export default function Project({ href, imgSrc, title, description }) {
    return (
        <a href={href} target='_BLANK' className={styles.projectLink}>
            <img src={imgSrc} alt={title} className={styles.projectImg} />
            <div className={styles.projectLinkText}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </a>
    )
}