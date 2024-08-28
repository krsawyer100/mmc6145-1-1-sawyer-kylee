import styles from '../styles/portfolio.module.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import furryFriendsImg from '../images/furry-friends.png'
import brainBoostImg from '../images/brain-boost.png'

export default function Home() {
    return (
        <>
        <Header />
        <main className={styles.main}>
            <h2>Portfolio</h2>
            <div className={styles.projectsBackground}>
                <div className={styles.projectsContainer}>
                    <a href="https://brain-boost-sawyer-6ebf05ed6f61.herokuapp.com/" target='_BLANK' className={styles.project} id={styles.projectOne}>
                        <img src={brainBoostImg} alt="" />
                        <h5>Brain Boost</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, molestias. In odio culpa delectus. Debitis, tenetur labore. Corrupti provident impedit veniam aliquid aspernatur ullam ipsam? Quaerat natus iste sit beatae.</p>
                    </a>
                    <a href="https://krsawyer100.github.io/com6338-10-10-sawyer-spets/" target='_BLANK' className={styles.project} id={styles.projectTwo}>
                        <img src={furryFriendsImg} alt="" />
                        <h5>Furry Friends</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, molestias. In odio culpa delectus. Debitis, tenetur labore. Corrupti provident impedit veniam aliquid aspernatur ullam ipsam? Quaerat natus iste sit beatae.</p>
                    </a>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}
