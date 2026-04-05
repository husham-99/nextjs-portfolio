
import module from './contacts.module.css'
import { FiDownload } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import ContactForm from './contactForm';
import BackToTop from '../backToTop/BackToTop';

const Contacts = () => {
    return (
        <section className="contact" id="contact">

            <div className={module.heading}>

                <h1>Get In Touch</h1>
            </div>
            <div className="container">
                <div className={module.contactContainer}>
                    <div className={module.contactContent}>
                        <p>Im always interested in hearing about new projects and opportunities. Whatever you're looking
                            for a developer, have aquestion or just want to connect, feel free to reach out
                        </p>
                        <div className={module.contactInfo}>
                            <h3>Let's work together</h3>
                            <p>Ready to bring ideas to life? I'm available for freelance
                                projects and full-time opportunities
                            </p>
                            <div>
                                <Link href="dontknow.com" className={module.link}>
                                    <FaFacebookF className={module.icon} />FaceBook
                                </Link>
                            </div>
                            <div>
                                <Link className={module.link} href="https://api.whatsapp.com/send?phone=966501637943" target='blank'>
                                    <FaWhatsapp className={module.icon} />Whatsaap
                                </Link>
                            </div>
                            <div>
                                <Link id={module.lastLink} className={module.link} href={'/cv.pdf'} download={true}>
                                    <FiDownload className={module.icon} />Download CV
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
                <BackToTop />
            </div>


        </section>
    )
}

export default Contacts