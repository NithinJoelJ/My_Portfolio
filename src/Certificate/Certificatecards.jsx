import Certificate from "./Certificate";
import Hackathon from './Certificates/Hackathon.jpg'
import Hp from './Certificates/Hp.jpeg'
import HR_Java from'./Certificates/HR_Java_intermediate.jpg'
import llm from './Certificates/llm.png'
import genai from'./Certificates/genai.jpg'
import aiprinciple from './Certificates/AI_priciples.jpg'
import sqladv from './Certificates/sqladv.jpg'
import problemsolving from './Certificates/problem_solving_basic.jpg'
import pythonbasic from './Certificates/python_basic.png'
import AIwithagri from './Certificates/AIwithagri.jpeg'
import udemy from './Certificates/Udemy.jpg'
import trinity from './Certificates/trinity.jpg'
import oracle from './Certificates/Oracle_gen_ai.jpg'

function Certificatecards(){
    const badges = [
        {
            img: oracle,
            title: "🏅 Oracle Certified Generative AI Professional (2025)",
            link: "https://www.linkedin.com/posts/nithinjoelj_oracle-certified-professional-activity-7349648586541813761-FvyG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc: "Recognized by Oracle for expertise in deploying and managing Generative AI solutions on Oracle Cloud Infrastructure."
        },
        {
            img: AIwithagri,
            title:"AI-Powered Smart Agriculture Internship – From Data to Insights",
            link: "https://www.linkedin.com/posts/nithinjoelj_ai-smartagriculture-machinelearning-activity-7342130307581530112-PGoD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Completed a certified internship on AI Powered Smart Agriculture – From DATA to INSIGHTS at VIT Vellore in June 2025."
        },

        {
            img: Hackathon,
            title: "Enhancing Surveillance with AI: My Experience at HACK-2-DETECT 2025",
            link: "https://www.linkedin.com/posts/nithinjoelj_hackathon-learningneverstops-innovation-activity-7298733029349302272-pg38?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Participated in HACK-2-DETECT, a cybersecurity-themed hackathon organized by KalkiNI from 14–18 February 2025."
        },
        {
            img: Hp,
            title: "HP (Data Science & Analytics)Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_datascience-analytics-lifelonglearning-activity-7273349966671106050-PvpX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Completed the HP LIFE online course on Data Science & Analytics in December 2024. Gained foundational knowledge in data practices, tools, and methodologies for data-driven business solutions."
        },
        {
            img: udemy,
            title: "C Programming for College Students",
            link: "https://www.linkedin.com/posts/nithinjoelj_cprogramming-udemy-certificationunlocked-activity-7345846348434370560-R6KQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Learned core concepts of C programming including syntax, control structures, functions, and basic problem-solving."
        },
        {
            img: HR_Java,
            title: "Intermediate JavaScript Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_javascript-coding-programming-activity-7258863897342803968-gJ3o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Passed the JavaScript (Intermediate) skill certification test on HackerRank in November 2024. Demonstrated proficiency in core JavaScript concepts, problem-solving, and coding best practices."
        },
        {
            img: llm,
            title: "Introduction to Large Language Models",
            link: "https://www.linkedin.com/posts/nithinjoelj_introduction-to-large-language-models-activity-7237686633070739457-n492?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Gained foundational knowledge of LLM architecture, use cases, and responsible AI practices."
        },
        {
            img: genai,
            title: "Introduction to Generative AI Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_introduction-to-generative-ai-activity-7237666996295716866-iX1n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Explored the basics of generative models, their applications, and the ethical use of AI technologies."
        },
        {
            img: aiprinciple,
            title: "AI Principles Certificate",
            link: "https://www.linkedin.com/posts/nithinjoelj_responsible-ai-applying-ai-principles-with-activity-7238766938829561856-JVYQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Learned to implement responsible AI practices aligned with Google’s AI principles in real-world applications."
        },
        {
            img: sqladv,
            title: "SQL (Advanced)",
            link: "https://www.linkedin.com/posts/nithinjoelj_sql-certification-database-activity-7214706042855702529-oPMi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Demonstrated strong proficiency in complex SQL queries, joins, subqueries, and data manipulation techniques."
        },
        {
            img: problemsolving,
            title: "Problem Solving (Basic)",
            link: "https://www.linkedin.com/posts/nithinjoelj_problemsolving-certification-hackerrank-activity-7213177410127634432-Z5FZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Demonstrated fundamental programming skills and logical thinking through algorithmic problem-solving challenges."
        },
        {
            img: pythonbasic,
            title: "Python (Basic)",
            link: "https://www.linkedin.com/posts/nithinjoelj_hackerrank-skill-certificate-activity-7210540884193366016-XI6k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc",
            desc:"Completed on 23 June 2024 demonstrating proficiency in core Python concepts and problem-solving"
        },
        {
            img: trinity,
            title: "Grade-1 Electronic Keybord",
            link: "https://www.linkedin.com/posts/nithinjoelj_trinitycollegelondon-musicperformance-electronickeyboards-activity-7209978928403238912-AvKv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEZp38BMi1nYFSyP5rnMpTboVexDUVQewc"
        }
        
    ]

    return(
        <div className="badgecontainer">
            {badges.map(
                (badgess,index)=>
            <Certificate key = {index} img = {badgess.img} title = {badgess.title} link = {badgess.link} desc={badgess.desc}/>
            )}
        </div>
    );
}

export default Certificatecards;