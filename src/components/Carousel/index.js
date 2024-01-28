import "./styles.css"

const Carousel = ({linkback, linkwall}) => {
    return(
        <div className="CardContainer">
            <div className="card">
                <img className="card-background"src={linkback} alt="img"></img>
                <img className="card-wallpaper" src={linkwall} alt="img2"></img>
            </div>
        </div>
    )
}

export { Carousel }