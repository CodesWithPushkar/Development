import './Card.css'

function Card(props){
    return <div className="card">
        <div className="card-image">
            <img src={props.imgLink} alt={props.imgAlt}/>
        </div>
        <div className="card-about">
            <div className="card-place-campus">
                <p className="card-place">{props.place}</p>
                <p className="card-campus">{props.campus}Campus</p>
            </div>
            <p className="card-state">{props.state}</p>
        </div>
    </div>
    
}

export default Card;