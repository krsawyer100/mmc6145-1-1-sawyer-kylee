import styles from '../styles/about.module.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import aboutImg from '/images/about-img.jpg'
import githubIconPrimaryLight from '/images/icons/github-icon-primary-light.png'
import emailIconPrimaryLight from '/images/icons/email-icon-primary-light.png'
import linkedinIconPrimaryLight from '/images/icons/linkedin-icon-primary-light.png'
import illustratorIcon from '/images/illustrator-icon.png'
import photoshopIcon from '/images/photoshop-icon.png'
import lightroomIcon from '/images/lightroom-icon.png'
import indesignIcon from '/images/indesign-icon.png'
import githubAboutIcon from '/images/github-about-icon.png'
import vscodeIcon from '/images/vscode-icon.png'
import dockerIcon from '/images/docker-icon.png'
import herokuIcon from '/images/heroku-icon.png'

export default function About() {
    return (
       <>
            <Header />
            <main className={styles.main}>
                <section className={styles.introduction}>
                    <img src={aboutImg} alt="Image of Kylee Sawyer" className={styles.introductionImg}/>
                    <div className={styles.introductionTextContainer}>
                        <h2>Kylee Sawyer</h2>
                        <h4>Web Design Student</h4>
                        <div className={styles.introductionText}>
                            <p>Hello, I am a web design graduate student attending the University of Florida. I currently work as a freelance UX Researcher for Edgeview Creative.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.resume}>
                    <div className={styles.columnOne}>
                        <div className={styles.contact}>
                            <h3>Contact/Socials</h3>
                            <div className={styles.contactsContainer}>
                                <a href="mailto:kyleesdesigns100@gmail.com" className={styles.contactInfo}>
                                    <img src={emailIconPrimaryLight} alt="Kylee's Email" />
                                    <h5>kyleesdesigns100@gmail.com</h5>
                                </a>
                                <a href='https://www.linkedin.com/in/kylee-sawyer/' target='_BLANK' className={styles.contactInfo}>
                                    <img src={linkedinIconPrimaryLight} alt="Kylee's LinkedIn" />
                                    <h5>LinkedIn: Kylee Sawyer</h5>
                                </a>
                                <a href='github.com/krsawyer100' target='_BLANK' className={styles.contactInfo}>
                                    <img src={githubIconPrimaryLight} alt="Kylee's Github" />
                                    <h5>Github: krsawyer100</h5>
                                </a>
                            </div>
                        </div>
                        <div className={styles.education}>
                            <h3>Education</h3>
                            <div className={styles.educationContainer}>
                                <h4>2021</h4>
                                <div className={styles.educationInfo}>
                                    <h5>Associate of Arts</h5>
                                    <p>College of the Albemarle</p>
                                </div>
                            </div>
                            <div className={styles.educationContainer}>
                                <h4>2023</h4>
                                <div className={styles.educationInfo}>
                                    <h5>Bachelors in Design Studies</h5>
                                    <p>North Carolina State University</p>
                                </div>
                            </div>
                            <div className={styles.educationContainer}>
                                <h4>2025</h4>
                                <div className={styles.educationInfo}>
                                    <h5>Masters in Web Design</h5>
                                    <p>University of Florida</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.experience}>
                            <h3>Experience</h3>
                            <div className={styles.experienceContainer}>
                                <h4>2023</h4>
                                <div className={styles.experienceInfo}>
                                    <h5>Freelance UX Researcher - Edgeview Creative</h5>
                                    <p>UX Research | Product Research | Accessibility Focused Research</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.columnTwo}>
                        <div className={styles.volunteering}>
                            <h3>Volunteering</h3>
                            <div className={styles.volunteeringContainer}>
                                <h4>2024</h4>
                                <div className={styles.volunteeringInfo}>
                                    <h5>Office Work and Event Help - AARF</h5>
                                    <p>Phone Calls | File Organization | Event Set-up | Assist Patrons</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <h3>Skills</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                                <li>SQL</li>
                                <li>Wireframes/Mockups</li>
                                <li>Image Editing</li>
                                <li>GIF Creation</li>
                                <li>UX Research</li>
                                <li>User Testing</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                        <div className={styles.software}>
                            <h3>Software</h3>
                            <div className={styles.softwareIcons}>
                                <img src={githubAboutIcon} alt="Github" title='Github'/>
                                <img src={vscodeIcon} alt="VS Code" title='VS Code'/>
                                <img src={dockerIcon} alt="Docker" title='Docker' />
                                <img src={herokuIcon} alt="Heroku" title='Heroku' />
                                <img src={illustratorIcon} alt="Adobe Illustrator" title='Adobe Illustrator' />
                                <img src={photoshopIcon} alt="Adobe Photoshop" title='Adobe Photoshop'/>
                                <img src={indesignIcon} alt="Adobe Indesign" title='Adobe Indesign' />
                                <img src={lightroomIcon} alt="Adobe Lightroom" title='Adobe Lightroom' />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}