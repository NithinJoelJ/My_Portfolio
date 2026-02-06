import './Contact.css'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import contact from './contact.jpg'

function Contact() {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <motion.div
                className="contact-details"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="left-contact">
                    <div className="buttons">
                        <div className="firstrow">
                            <button
                                className='git'
                                onClick={() => openLink("https://github.com/NithinJoelJ")}
                            >
                                Github
                            </button>
                            <button
                                className='LinkedIn'
                                onClick={() => openLink("https://www.linkedin.com/in/nithin-joel-j-453938265/")}
                            >
                                LinkedIn
                            </button>
                            <button
                                className='yt'
                                onClick={() => openLink("https://www.youtube.com/@jolleejoel")}
                            >
                                Youtube
                            </button>
                            <button
                                className="Mail"
                                onClick={() => window.location.href = "mailto:nithinjoelj2004@gmail.com"}
                            >
                                Mail
                            </button>
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="contact-info-card">
                            <div className="icon-wrapper">
                                <FaEnvelope />
                            </div>
                            <div className="info-text">
                                <span className="label">Mail</span>
                                <a href="mailto:nithinjoelj2004@gmail.com" className="value">nithinjoelj2004@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <div className="icon-wrapper">
                                <FaPhone />
                            </div>
                            <div className="info-text">
                                <span className="label">Phone</span>
                                <a href="tel:+917810088191" className="value">+91 7810088191</a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Contact;