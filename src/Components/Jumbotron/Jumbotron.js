import "./Jumbotron.css";
const Jumbotron = (props) => {
    return (
        <div className={`${props.reverse ? 'jumbotron-screen reverse' : 'jumbotron-screen '}`}>
            <div className="jumbotron-screen-content">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
            <div className="jumbotron-screen-img">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Jumbotron
