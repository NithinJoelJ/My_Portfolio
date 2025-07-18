import './Section.css'

function Section(props){
    return(
        <>
        <div className="box">
            <div className="line"></div>
        <h1>{props.name}</h1>
        <div className="line"></div>
        </div>
        </>
    );
}

export default Section;