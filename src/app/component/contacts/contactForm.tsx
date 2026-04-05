'use client'
import module from './contacts.module.css'
import { useState } from 'react';
import Modal from './modal'

const ContactForm = () => {
    const [inputs, setInputs] = useState({ name: '', email: '', subject: '', message: '' })
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    function handleFormSupmit(e) {
        e.preventDefault()
        setErrorMessage(null)
        const { name, email, subject, message } = inputs
        if (name.trim().length < 6) {
            setErrorMessage("enter your full name please 🤨 !!")
        }
        else if (!email.includes("@")) {

            setErrorMessage("enter avalid email please 😡 !!")
        } else if (subject.trim().length < 3) {

            setErrorMessage("enter your subject please 🙄 !!")
        } else if (message.trim().length < 5) {
            setErrorMessage("enter your Message please 🤬 !!")
        }
        setShowModal(true)
    }
    // function handleFormClick() {
    //     if (showModal == false) {
    //         setShowModal(true)
    //     } else {
    //         setShowModal(false)
    //     }
    // }


    return (

        <form className={module.contactForm}>
            <h3>Get in touch</h3>
            <input placeholder="Your Full Name *" value={inputs.name} onChange={(e) => { setInputs({ ...inputs, name: e.target.value }) }} />
            <input placeholder="Your Email *" value={inputs.email} onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }} />
            <input placeholder="Subject *" value={inputs.subject} onChange={(e) => { setInputs({ ...inputs, subject: e.target.value }) }} />
            <textarea placeholder="Your Message *" value={inputs.message} onChange={(e) => { setInputs({ ...inputs, message: e.target.value }) }} />
            <button onClick={handleFormSupmit}>Send Message</button>
            <Modal isVisible={showModal} errorMessage={errorMessage} />


        </form>

    )
}

export default ContactForm