import './Projects.css'

function Projects(props){

    const handlebutton = () => {
        window.open(props.link)
    }

    return(
        <>
            <div className="project-box">
            <div className="image-container">
                <img src={props.projectimage} alt="" />
            </div>
        <div className="contents">
            <h2>{props.projecttitle}</h2>
        <p>{props.projectdescription}</p>
        <button onClick={handlebutton} className='projectbutton'>View More</button>

        </div>
        </div>
        </>
    );
}

export default Projects;