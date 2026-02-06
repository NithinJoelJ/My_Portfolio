import './Page_2.css';
import Tilt from 'react-parallax-tilt';
import joelpic from './frame.jpg';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Page_2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initially
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="About">
      <motion.div
        className="left-box"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-frame" />
      </motion.div>

      <motion.div
        className="right-box"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1>A brief intro about me</h1>
        <p>
          👋 Hi, I’m Nithin Joel J, a Computer Science Engineering student with a passion for
          building robust, user-friendly applications. 💻 My focus lies in mastering technologies
          like React and Flutter to craft dynamic web and mobile solutions...
        </p>
      </motion.div>
    </div>
  );
}

export default Page_2;