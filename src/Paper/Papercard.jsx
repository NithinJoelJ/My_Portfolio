import Paper from './Paper'
import './Paper.css'
import { motion } from 'framer-motion'

function Papercard() {
    const papers = [
        {
            title: "Employee Data Insights: Building a Chat-Based Analysis App with Streamlit and Gemini Pro with Speech Recognition",
            abstract: "I built an AI-powered chatbot that analyzes CSV data through natural language queries, including voice input. It uses Streamlit for the interface, LangChain for query handling, and Gemini Pro for NLP. The app performs real-time statistical analysis and visualizations without needing tools like Tableau or Power BI. Designed for non-technical users, it supports filtering, summarizing, and exploring data with zero code. This project was published on SSRN (Elsevier) for its innovative approach to simplifying data analysis.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5200598"
        },
        {
            title: "FROM SCI-FI TO REALITY: THE JOURNEY OF WEARABLE TECHNOLOGY",
            abstract: "Wearable technology has evolved from a futuristic concept to a practical tool that seamlessly integrates into daily life. Initially imagined as a bridge between humans and machines, modern wearables now enhance health monitoring, communication, and productivity. This paper explores their transformation from visionary ideas to real-world innovation.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5249634"
        }
    ]
    return (
        <div className="papers-layout">
            {papers.map((paperss, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    <Paper title={paperss.title} abstract={paperss.abstract} link={paperss.link} />
                </motion.div>
            ))}
        </div>
    );
}

export default Papercard;