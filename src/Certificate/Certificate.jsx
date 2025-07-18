import './Certificate.css'

function Certificate(props){

    function openlink(){
        window.open(props.link,"blank");
    }

    return(
        <>
        <div className="badgecard">
            <img src={props.img} alt="" />
            <p>{props.title}</p>
            <p>{props.desc}</p>
            <div className="mybutton">
                <button className='mybuttons' onClick={openlink}>LinkedIn</button>
            </div>
            
        </div>
        </>
    );
}

export default Certificate;