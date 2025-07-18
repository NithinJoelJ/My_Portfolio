function Logos(props){
    return(
            <div className="card">
                <img src={props.img} alt="" />
                <h4>{props.title}</h4>
            </div>
    );
}

export default Logos