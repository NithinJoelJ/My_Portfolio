import Paper from './Paper'
import './Paper.css'

function Papercard(){
    const papers = [
        {
            title:"Employee Data Insights: Building a Chat-Based Analysis App with Streamlit and Gemini Pro with Speech Recognition",
            // abstract : "In today's busy digital world, data-driven decision-making is vital for organizations, business leaders, and researchers everywhere. Traditional data analysis is often full of SQL, Python, or BI tool expertise, which is not easy to deal with for nontechnical users for data exploration.This paper suggests an AI-powered chatbot-driven data analysis system with data wrangling where users can ask questions on structured data as well as wrangling commands in natural language. Through integration of Streamlit for interactive user interfaces, Google Gemini Pro for responses based on NLP, and LangChain to extract structured information, the system simplifies query and visualization of CSV data through non-explicit coding. The chatbot facilitates users to load CSV files, pose conversational queries on the data, and obtain correct answers in text and graphical form. In contrast to standard BI tools like Tableau, Power BI, and Looker, which use predefined dashboards and formatted queries, this chatbot dynamically reads user queries, fetches data of interest, and creates proper visualizations on the fly in real-time. It facilitates automatic data preprocessing, on-the-fly statistical analysis, smart response generation, and AI-driven visualization choice, taking considerably less time and effort for exploration of data.This article describes the architecture, deployment, and nittygritties of the chatbot and shows how Google Gemini Pro takes NLP capability to the next level to query structured data. The capability of the system to provide context-based insights, dynamically pivot across various datasets, and provide voice-based querying is a paradigm shift in AI-driven analytics.The comparison made with traditional BI platforms highlights the system's unique strengths like easy access, real-time responsiveness, and ease of use.With the unification of the gap between AI, NLP, and structured data analysis, this chatbot is a data-driven decision-making and business intelligence revolution. The future releases such as predictive analytics, multilingual NLP support, database integrations, and enhanced data security bring the paper to a conclusion, outlining how AIpowered data analysis tools will transform and redefine the way weengage with structured datasets."
            abstract : "I built an AI-powered chatbot that analyzes CSV data through natural language queries, including voice input. It uses Streamlit for the interface, LangChain for query handling, and Gemini Pro for NLP. The app performs real-time statistical analysis and visualizations without needing tools like Tableau or Power BI. Designed for non-technical users, it supports filtering, summarizing, and exploring data with zero code. This project was published on SSRN (Elsevier) for its innovative approach to simplifying data analysis.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5200598"
        },
        {
            title:"FROM SCI-FI TO REALITY: THE JOURNEY OF WEARABLE TECHNOLOGY",
            abstract : "Wearable technology has evolved from a futuristic concept to a practical tool that seamlessly integrates into daily life. Initially imagined as a bridge between humans and machines, modern wearables now enhance health monitoring, communication, and productivity. This paper explores their transformation from visionary ideas to real-world innovation.",
            link : "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5249634"
        }
    ]

    
    return(
        <>
        {papers.map((paperss,index)=>(
        <Paper key = {index} title = {paperss.title} abstract = {paperss.abstract} link = {paperss.link}/>
    ))}
        </>
    );
}

export default Papercard;