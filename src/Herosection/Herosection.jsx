import './Herosection.css';
import joel from './joel.jpg';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaChevronDown } from 'react-icons/fa';

function Herosection() {
    const handleDownload = () => {
        const fileUrl = '/Joel_resume.pdf';
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

    // Staggered animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="main_container">
            <motion.div
                className="left"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                <motion.h1 variants={itemVariants}>
                    Nithin Joel J <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}>👋</motion.span>
                </motion.h1>
                <motion.div className="line" variants={itemVariants}></motion.div>

                <motion.div className="contents" variants={itemVariants}>
                    <p>
                        Architecting the digital future with <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Code</span> & <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Creativity</span>.
                        <br /><br />
                        I transform complex problems into elegant, high-performance web solutions.
                    </p>
                    <div className="buttons">
                        <div className="firstrow">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='git'
                                onClick={() => openLink("https://github.com/NithinJoelJ")}
                            >
                                Github
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='LinkedIn'
                                onClick={() => openLink("https://www.linkedin.com/in/nithin-joel-j-453938265/")}
                            >
                                LinkedIn
                            </motion.button>
                        </div>
                        <div className="secondrow">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='yt'
                                onClick={() => openLink("https://www.youtube.com/@jolleejoel")}
                            >
                                Youtube
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='Resume'
                                onClick={handleDownload}
                            >
                                Get My Resume
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="right"
                initial={{ opacity: 0, x: 100, rotateY: 90 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            >
                <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                    className="image-tilt-container"
                >
                    <motion.div
                        className="image"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img src={joel} alt="profile" className='tilt-image' />
                        {/* Decorative 3D elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'rgba(255, 215, 0, 0.2)',
                            borderRadius: '50%',
                            filter: 'blur(40px)',
                            zIndex: -1
                        }}></div>
                    </motion.div>
                </Tilt>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#FFD700',
                    fontSize: '2rem',
                    cursor: 'pointer'
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <FaChevronDown />
            </motion.div>
        </div>
    );
}

export default Herosection;