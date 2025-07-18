import './Page_2.css';
import Tilt from 'react-parallax-tilt';
import joelpic from './frame.jpg';
import { useState, useEffect } from 'react';

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
      <div className="left-box">
        <Tilt
          glareEnable={!isMobile}
          glareMaxOpacity={0.5}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.05}
          gyroscope={true}
          transitionSpeed={2500}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="tilt-wrapper"
        >
          <div className="image-frame" />
        </Tilt>
      </div>

      <div className="right-box">
        <h1>A brief intro about me</h1>
        <p>
          👋 Hi, I’m Nithin Joel J, a Computer Science Engineering student with a passion for
          building robust, user-friendly applications. 💻 My focus lies in mastering technologies
          like React and Flutter to craft dynamic web and mobile solutions...
        </p>
      </div>
    </div>
  );
}

export default Page_2;