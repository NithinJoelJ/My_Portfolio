import './Contact.css'
import contact from './contact.jpg'

function Contact() {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <div className="contact-details">
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
                    <div className="details">
                        <p>📧 Mail: nithinjoelj2004@gmail.com</p>
                        <p>📞 Ph: +91 7810088191</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;