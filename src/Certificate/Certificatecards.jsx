import { useState, useEffect, useRef } from 'react';
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
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Certificatecards() {
    const badges = [
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(340); // 320 card + 20 gap
    const [visibleCards, setVisibleCards] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const autoScrollInterval = useRef(null);

    // Responsive visible cards & width calculation
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) { // Mobile
                setVisibleCards(1);
                setCardWidth(width); // Use full width for track calculation
            } else if (width < 1200) { // Tablet
                setVisibleCards(2);
                setCardWidth(340);
            } else { // Desktop
                setVisibleCards(3);
                setCardWidth(340);
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto Scroll Logic
    useEffect(() => {
        if (isPaused) return;

        autoScrollInterval.current = setInterval(() => {
            handleNext();
        }, 3000); // 3 seconds per scroll

        return () => clearInterval(autoScrollInterval.current);
    }, [isPaused, currentIndex, visibleCards]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]); // Re-bind when index changes to avoid stale state in simple closures if not using functional state updates properly, but here handlePrev uses functional update.
    // However, handleNext/Prev are defined inside render. It's safer to just bind once if they didn't depend on state, but they do (or safely use setState callback).
    // Actually handleNext/Prev use setCurrentIndex(prev => ...), so they don't depend on 'currentIndex' variable directly.
    // So we can remove [currentIndex] dependency if we pull handleNext/Prev out or ensure stable reference.
    // For simplicity, I'll keep the dependency or just put the logic inside.

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            // If we reach the end clone point, reset (circular logic simplified)
            // For true circular, we use % length
            return (prevIndex + 1) % badges.length;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? badges.length - 1 : prevIndex - 1;
        });
    };

    // Determine translateX
    // To enable "infinite" feel properly we'd need clones, but simple loop is:
    // When at end, it snaps back to 0. 
    // To avoid blank space at end, we can append the start of list to end.
    // For now, simpler "End -> Start" jump is acceptable or we limit index to badges.length - visibleCards.
    // User asked "keep on circulate", implying no stop. "Mod stats" logic above does that (snaps back to 0).

    // Create an extended array for smooth visual loop?
    // Let's stick to the % logic which jumps back to start. It's a "Carousel".

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>

            <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="Previous">
                <FaChevronLeft />
            </button>

            <div
                className="badgecontainer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * cardWidth}px)`,
                    }}
                >
                    {/* Render badges */}
                    {badges.map((badge, index) => (
                        <div key={index} style={{ width: cardWidth - 20 }}> {/* Minus gap */}
                            <Certificate
                                img={badge.img}
                                title={badge.title}
                                link={badge.link}
                                desc={badge.desc}
                            />
                        </div>
                    ))}

                    {/* Render a few duplicates at the end to ensure no whitespace if we scroll to last item? 
                        Actually with the % logic, if we are at the last index, we see blank space to the right?
                        Yes. To fix this "infinite" look, we usually need simpler Marquee OR complex cloning.
                        Given "keep on circulate" and "arrows", pure infinite is hard without a library.
                        I will add duplicates of the first 'visibleCards' to the end.
                    */}
                    {badges.slice(0, visibleCards).map((badge, index) => (
                        <div key={`clone-${index}`} style={{ width: cardWidth - 20 }}>
                            <Certificate
                                img={badge.img}
                                title={badge.title}
                                link={badge.link}
                                desc={badge.desc}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="Next">
                <FaChevronRight />
            </button>
        </div>
    );
}

export default Certificatecards;