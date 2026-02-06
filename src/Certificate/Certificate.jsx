import './Certificate.css'

function Certificate(props) {

    function openlink() {
        window.open(props.link, "blank");
    }

    return (
        <>
            <div className={`badgecard ${props.isActive ? 'active' : ''}`}>
                <img src={props.img} alt="" />
                <div className="badge-content">
                    <h3 className="badge-title">{props.title}</h3>
                    <p className="badge-desc">{props.desc}</p>
                </div>
                <div className="mybutton">
                    <button className='mybuttons' onClick={openlink}>LinkedIn</button>
                </div>

            </div>
        </>
    );
}

export default Certificate;