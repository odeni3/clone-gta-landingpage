import "./styles.css"

const ButtonClassic = ({name , className, event}) => {
    return(
        <button className={className} onClick={event}>{name}</button>
    )
}

export { ButtonClassic };