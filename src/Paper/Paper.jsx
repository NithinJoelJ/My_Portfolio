import './Paper.css'

function Paper(props){

    function openlink(){
        window.open(props.link);
    }
    return(<>
    <div className="papercontainer">
        <h1>{props.title}</h1>
        <h3>Abstract</h3>
        <div className="abstractcontainer">
            <p>{props.abstract}</p>
        </div>
        <button className='paperbutton' onClick={openlink}>View Paper</button>
    </div>
    </>);
}

export default Paper;