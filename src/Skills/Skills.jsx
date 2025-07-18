import './Skills.css'
import Cards from'./Cards.jsx'
function Skills (props){
    return(
        <div className="About">
            <div className="left-boxskills">
                <h1>Information about Skills</h1>
                <p><br />My skill set blends creative design and technical development. I focus on tools and frameworks I truly enjoy working with—those that help me build intuitive, user-friendly applications. I believe in depth over breadth, continuously refining my strengths while staying curious and open to new technologies.<br/> <br/>

I’m a front-end-focused developer with a strong foundation in React.js, Firebase, and Figma. My projects, like the YouTube clone, highlight my passion for seamless UI/UX and responsive design. I’m currently expanding my expertise with Flutter and Dart to bridge mobile development into my workflow.<br/> <br/>

On the analytical side, I’m diving into data science and machine learning, having built models like Parkinson’s Disease detection using SVM and Scikit-learn. Though still early in my AI journey, I’m committed to exploring Python-based ML frameworks and uncovering insights from data.<br/><br/>
</p>
            </div>
            <div className="right-boxlogo">
                <h1>Language / Tools I Use</h1>

            <div className="cards-container">
                <Cards/>
            </div>
                
            </div>
            
        </div>
    );
}

export default Skills;