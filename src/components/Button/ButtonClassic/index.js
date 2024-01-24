import "./styles.css"

const ButtonClassic = ({name , className}) => {
    return(
        <button className={className}>{name}</button>
    )
}

export { ButtonClassic };