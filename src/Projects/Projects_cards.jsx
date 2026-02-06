import { useState } from 'react';
import Projects from './Projects';
import netflix from './projectsimages/netflix.jpg'
import Spotify from './projectsimages/Spotify.jpg'
import './Projects.css'
import { motion } from 'framer-motion';
import youtube from './projectsimages/yt.jpg'
import parkinson from './projectsimages/parkinson.jpg'
import movieticketbookingui from './projectsimages/Movie_Ticket_Booking_App.png'
import interior_design from './projectsimages/interior_design.png'
import img1 from './projectsimages/1.png'
import img2 from './projectsimages/2.png'
import img3 from './projectsimages/3.png'
import img4 from './projectsimages/4.png'
import img5 from './projectsimages/5.png'
import img6 from './projectsimages/6.png'

function Projects_cards() {
    const [activeTab, setActiveTab] = useState('streamlit');

    const frontendProjects = [
        {
            img: movieticketbookingui,
            title: "Avengers-Themed Movie Ticket Booking App (Figma Prototype)",
            description: "A Marvel-themed movie ticket booking app designed in Figma, inspired by Avengers: Endgame. It features a complete user journey — from movie selection to seat booking and mobile ticket generation.",
            link: "https://www.figma.com/proto/9EOAIHyG2LyjeBm4GjC1qL/Movie_Booking_Ui?page-id=0%3A1&node-id=1-2&p=f&viewport=204%2C231%2C0.42&t=FOoDRDmobIkHqEbg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
        },
        {
            img: netflix,
            title: "Youtube Clone",
            description: "I created a YouTube clone using React and Firebase, featuring video streaming, user authentication, and dynamic video loading. The project focuses on responsive design and replicating YouTube's core functionality for an intuitive user experience.",
            link: "https://yt-clone-by-joel.web.app/"
        },
        {
            img: interior_design,
            title: "CleverDecor – Modern Interior Design Website (UI/UX Design)",
            description: "This project focuses on elegant layout composition, clean typography, and an inviting user journey designed to reflect the aesthetic sophistication of the brand.",
            link: "https://www.figma.com/proto/Tik12CqwtuCHTnWvs268g0/Insterior_design?page-id=0%3A1&node-id=1-2&viewport=236%2C348%2C0.5&t=TklQKXqEcByMZggS-1&scaling=scale-down&content-scaling=fixed"
        },
        {
            img: Spotify,
            title: "Spotify Clone",
            description: "I built a Spotify clone using React and Firebase, incorporating features like user authentication, playlist management, and real-time music streaming. The project emphasizes responsive design and smooth integration with Spotify's APl for an engaging user experience.",
            link: "https://spotify-clone-by-joel.web.app/"
        },
        {
            img: youtube,
            title: "Netflix Clone",
            description: "I developed Netflix clone applications using React and Firebase, focusing on responsive Ul, dynamic routing, and seamless integration of real-time data. These projects replicate key features of Netflix, such as user authentication and media streaming interfaces.",
            link: "https://netflix-clone-44f7d.web.app/"
        },

    ];

    const streamlitProjects = [
        {
            img: img1,
            title: "smartshelf ∙ master ∙ main2.py",
            description: "Smart shelf management system implementation.",
            link: "https://smartshelf-veggcrxaf9nqhgt446trxa.streamlit.app/"
        },
        {
            img: img2,
            title: "smart-crop-market-price-recommender-ai-powered-farming-insights",
            description: "AI-powered farming insights for crop market price recommendations.",
            link: "https://smart-crop-market-price-recommender-ai-powered-farming-insight.streamlit.app/"
        },
        {
            img: img3,
            title: "smart-city-traffic-pollution-monitor",
            description: "Monitoring traffic and pollution in smart cities using data analytics.",
            link: "https://smart-city-traffic-pollution-monitor-6rbbbekymrv9b9ufjrd7ch.streamlit.app/"
        },
        {
            img: parkinson,
            title: "Parkinson-Disease-Detection",
            description: "Parkinson’s disease is a brain disorder that affects movement. It happens when brain cells that make dopamine slowly die. This causes symptoms like: Shaking, Stiffness, Slowness of movement, Trouble with balance and walking. While it currently can't be cured, medications can help manage the symptoms.",
            link: "https://github.com/NithinJoelJ/Parkinson-Disease-Detection"
        },
        {
            img: img4,
            title: "secure-password-vault-compression-encryption",
            description: "A password vault with compression and encryption capabilities.",
            link: "https://passwordgenerator-cqfzdkyc2bgwabbulkxigu.streamlit.app/"
        },
        {
            img: img5,
            title: "pharmapredict-ai---drug-shortage-risk-forecasting",
            description: "Drug shortage risk forecasting using AI models.",
            link: "https://pharmapredict-ai---drug-shortage-risk-forecasting.streamlit.app/"
        },
        {
            img: img6,
            title: "food-price-inflation-dashboard",
            description: "A dashboard to visualize and analyze food price inflation trends.",
            link: "https://food-price-inflation-dashboard-8qpdzmjjjv8nu5fudng8rq.streamlit.app/"
        }
    ];

    const displayedProjects = activeTab === 'frontend' ? frontendProjects : streamlitProjects;

    return (
        <div>
            {/* Tabs */}
            <div className="project-tabs">
                <button
                    className={`tab-btn ${activeTab === 'streamlit' ? 'active' : ''}`}
                    onClick={() => setActiveTab('streamlit')}
                >
                    AI/ML Projects
                </button>
                <button
                    className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
                    onClick={() => setActiveTab('frontend')}
                >
                    Frontend Projects
                </button>
            </div>

            {/* Grid */}
            <div className="project-container">
                {displayedProjects.map((info, index) =>
                    <motion.div
                        key={`${activeTab}-${index}`} // Re-trigger animation on tab switch
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Projects
                            projectimage={info.img}
                            projecttitle={info.title}
                            projectdescription={info.description}
                            link={info.link}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Projects_cards;