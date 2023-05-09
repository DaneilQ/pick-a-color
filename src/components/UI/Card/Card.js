import './Card.css'

const Card = (props) => {
    return (
        <div className="main-card">
            {props.title && <h2>{props.title}</h2>}
            {props.children}
        </div>
    )
}

export default Card;