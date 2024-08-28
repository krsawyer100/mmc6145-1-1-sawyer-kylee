import styles from '../styles/contact.module.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import ContactCard from '../components/contactCard.jsx'

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.contact}>
                    <ContactCard />
                </section>
            </main>
            <Footer />
        </>
    )
  }