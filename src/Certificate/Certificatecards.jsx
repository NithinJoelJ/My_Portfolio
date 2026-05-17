import { useState } from 'react';
import Certificate from "./Certificate";
import Hackathon from './Certificates/Hackathon.jpg'
import Hp from './Certificates/Hp.jpeg'
import HR_Java from './Certificates/HR_Java_intermediate.jpg'
import llm from './Certificates/llm.png'
import genai from './Certificates/genai.jpg'
import aiprinciple from './Certificates/AI_priciples.jpg'
import sqladv from './Certificates/sqladv.jpg'
import problemsolving from './Certificates/problem_solving_basic.jpg'
import pythonbasic from './Certificates/python_basic.png'
import AIwithagri from './Certificates/AIwithagri.jpeg'
import AI_Azure from './Certificates/AI_Azure.jpg'
import udemy from './Certificates/Udemy.jpg'
import trinity from './Certificates/trinity.jpg'
import oracle from './Certificates/Oracle_gen_ai.jpg'
import MSAI from './Certificates/MSAI.png'
import google from './Certificates/google.png'
import azure_fundamentals from './Certificates/Azure_AI_Fundamentals.png'
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

function Certificatecards() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const badges = [
        {
            img: azure_fundamentals,
            title: "Microsoft Certified: Azure AI Fundamentals",
            link: "https://www.linkedin.com/posts/nithinjoelj_azure-ai-fundamentals-activity-7460188780944089088-MRIC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Successfully completed the requirements and earned the Microsoft Certified: Azure AI Fundamentals certification."
        },
        {
            img: MSAI,
            title: "Microsoft Certified: Azure AI Engineer Associate",
            link: "https://www.linkedin.com/posts/nithinjoelj_ai-azure-internship-certificate-activity-7357371734058045441-rwsS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Successfully completed a 4-week internship on AI Azure from 11th June 2025 to 15th July 2025."
        },
        {
            img: oracle,
            title: "🏅 Oracle Certified Generative AI Professional (2025)",
            link: "https://www.linkedin.com/posts/nithinjoelj_oracle-certified-professional-activity-7349648586541813761-FvyG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Recognized by Oracle for expertise in deploying and managing Generative AI solutions on Oracle Cloud Infrastructure."
        },
        {
            img: google,
            title: "Google Data Analytics Professional Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_google-data-analytics-certificate-activity-7367856050768707584-k3PY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Successfully completed the Google Data Analytics Professional Certificate on Coursera!"
        },
        {
            img: AIwithagri,
            title: "AI-Powered Smart Agriculture Internship – From Data to Insights",
            link: "https://www.linkedin.com/posts/nithinjoelj_ai-smartagriculture-machinelearning-activity-7342130307581530112-PGoD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Completed a certified internship on AI Powered Smart Agriculture – From DATA to INSIGHTS at VIT Vellore in June 2025."
        },
        {
            img: Hackathon,
            title: "HACK-2-DETECT 2025 Participation",
            link: "https://www.linkedin.com/posts/nithinjoelj_hackathon-learningneverstops-innovation-activity-7298733029349302272-pg38?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Participated in HACK-2-DETECT, a cybersecurity-themed hackathon organized by KalkiNI from 14–18 February 2025."
        },
        {
            img: Hp,
            title: "HP (Data Science & Analytics)",
            link: "https://www.linkedin.com/posts/nithinjoelj_datascience-analytics-lifelonglearning-activity-7273349966671106050-PvpX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Completed the HP LIFE online course on Data Science & Analytics in December 2024. Gained foundational knowledge in data practices."
        },
        {
            img: udemy,
            title: "C Programming for College Students",
            link: "https://www.linkedin.com/posts/nithinjoelj_cprogramming-udemy-certificationunlocked-activity-7345846348434370560-R6KQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Learned core concepts of C programming including syntax, control structures, functions, and basic problem-solving."
        },
        {
            img: HR_Java,
            title: "Intermediate JavaScript Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_javascript-coding-programming-activity-7258863897342803968-gJ3o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Passed the JavaScript (Intermediate) skill certification test on HackerRank in November 2024."
        },
        {
            img: llm,
            title: "Introduction to Large Language Models",
            link: "https://www.linkedin.com/posts/nithinjoelj_introduction-to-large-language-models-activity-7237686633070739457-n492?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Gained foundational knowledge of LLM architecture, use cases, and responsible AI practices."
        },
        {
            img: genai,
            title: "Introduction to Generative AI",
            link: "https://www.linkedin.com/posts/nithinjoelj_introduction-to-generative-ai-activity-7237666996295716866-iX1n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Explored the basics of generative models, their applications, and the ethical use of AI technologies."
        },
        {
            img: aiprinciple,
            title: "AI Principles Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_responsible-ai-applying-ai-principles-with-activity-7238766938829561856-JVYQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Learned to implement responsible AI practices aligned with Google’s AI principles in real-world applications."
        },
        {
            img: sqladv,
            title: "SQL (Advanced)",
            link: "https://www.linkedin.com/posts/nithinjoelj_sql-certification-database-activity-7214706042855702529-oPMi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Demonstrated strong proficiency in complex SQL queries, joins, subqueries, and data manipulation techniques."
        },
        {
            img: problemsolving,
            title: "Problem Solving (Basic)",
            link: "https://www.linkedin.com/posts/nithinjoelj_problemsolving-certification-hackerrank-activity-7213177410127634432-Z5FZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Demonstrated fundamental programming skills and logical thinking through algorithmic problem-solving challenges."
        },
        {
            img: pythonbasic,
            title: "Python (Basic)",
            link: "https://www.linkedin.com/posts/nithinjoelj_hackerrank-skill-certificate-activity-7210540884193366016-XI6k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Completed on 23 June 2024 demonstrating proficiency in core Python concepts and problem-solving"
        },
        {
            img: trinity,
            title: "Grade-1 Electronic Keyboard",
            link: "https://www.linkedin.com/posts/nithinjoelj_trinitycollegelondon-musicperformance-electronickeyboards-activity-7209978928403238912-AvKv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Trinity College London - Music Performance (Electronic Keyboards)"
        }
    ];

    const topCertificates = badges.slice(0, 3);
    const remainingCertificates = badges.slice(3);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="certificate-container">
                {topCertificates.map((badge, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        <Certificate
                            img={badge.img}
                            title={badge.title}
                            link={badge.link}
                            desc={badge.desc}
                        />
                    </motion.div>
                ))}
            </div>
            
            <motion.button 
                className="view-more-cert-btn"
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                View More Certificates
            </motion.button>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div 
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div 
                            className="cert-modal-content"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="cert-modal-header">
                                <h2>All Certificates</h2>
                                <button className="cert-modal-close" onClick={() => setIsModalOpen(false)}>
                                    <FaTimes />
                                </button>
                            </div>
                            
                            <div className="cert-modal-body">
                                <div className="certificate-container modal-grid">
                                    {remainingCertificates.map((badge, index) => (
                                        <Certificate
                                            key={`modal-${index}`}
                                            img={badge.img}
                                            title={badge.title}
                                            link={badge.link}
                                            desc={badge.desc}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Certificatecards;