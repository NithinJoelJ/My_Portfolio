import './Projects.css'

function Projects(props) {

    const handlebutton = () => {
        window.open(props.link)
    }

    return (
        <>
            <div className="project-box">
                <div className="image-container">
                    {props.projectimage ? (
                        <img src={props.projectimage} alt={props.projecttitle} />
                    ) : (
                        <div className="image-placeholder">
                            <span>Image Coming Soon</span>
                        </div>
                    )}
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