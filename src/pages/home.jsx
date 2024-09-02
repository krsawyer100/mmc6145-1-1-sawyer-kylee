import styles from '../styles/home.module.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import ContactCard from '../components/contactCard.jsx'
import Project from '../components/project.jsx'
import heroImg from '/images/hero-img.jpg'
import skillsImg from '/images/skills.jpg'
import furryFriendsImg from '/images/furry-friends.png'
import brainBoostImg from '/images/brain-boost.png'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
              <h2>Hello!</h2>
              <h4>I am a web design graduate student attending the University of Florida. I currently work as a freelance UX Researcher for Edgeview Creative.</h4> 
            </div>
            <Link to="/about" className={styles.aboutBtn}>More About Me</Link>
          </div>
          <img src={heroImg} alt="Photo of Kylee" className={styles.aboutImg}/>
        </section>
        <section className={styles.skills}>
          <div className={styles.skillsContainer}>
            <img src={skillsImg} alt="Photo of Web Development Code" className={styles.skillsImg}/>
            <div className={styles.skillsText}>
              <h3>Skills</h3>
              <div className={styles.skillsList}>
                <h5><strong>Languages: </strong>HTML, CSS, JavaScript, SQL</h5>
                <h5><strong>Software: </strong>Photoshop, InDesign, Illustrator, Figma</h5>
                <h5><strong>Design: </strong>UX Research, Wireframes/Mockups</h5>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.projects}>
          <h3>Latest Projects</h3>
          <div className={styles.projectsContainer}>
            <Project 
              href="https://brain-boost-sawyer-6ebf05ed6f61.herokuapp.com/"
              imgSrc={brainBoostImg}
              title="Brain Boost"
              description="The Brain Boost Study Application is a website to help enhance a users study efficiency with study sets and flashcards."
            />
            <Project 
              href="https://krsawyer100.github.io/com6338-10-10-sawyer-spets/" 
              imgSrc={furryFriendsImg}
              title="Furry Friends"
              description="Furry Friends is a website that shows dogs and cats that are avaiable for adoption in your area."
            />
          </div>
          <Link to="/portfolio" className={styles.projectBtn}>View Full Portfolio</Link>
        </section>
        <section className={styles.contact}>
          <ContactCard />
        </section>
      </main>
      <Footer />
    </>
  )
}