import './Herosection.css';
import joel from './joel.jpg';
import { motion } from 'framer-motion';

function Herosection() {
    const handleDownload = () => {
        const fileUrl = '/Joel_resume.pdf'; // Added leading slash for public folder
        const fileName = 'Nithin_Joel_J_Resume.pdf';
    
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="main_container">
            <motion.div
                className="left"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Nithin Joel J👋</h1>
                <div className="line"></div>
                <div className="contents">
                    <p>
                        A 20-year-old passionate tech enthusiast <br />
                        on a mission to explore, innovate, <br />
                        and master the latest technologies. 🌟
                    </p>
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
                        </div>
                        <div className="secondrow">
                            <button 
                                className='yt' 
                                onClick={() => openLink("https://www.youtube.com/@jolleejoel")}
                            >
                                Youtube
                            </button>
                            <button 
                                className='Resume' 
                                onClick={handleDownload}
                            >
                                Get My Resume
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="right"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="image">
                    <img src={joel} alt="profile" className='tilt-image' />
                </div>
            </motion.div>
        </div>
    );
}

export default Herosection;