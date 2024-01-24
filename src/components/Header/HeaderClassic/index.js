import "./styles.css"
import { ButtonHeader } from "../../Button/ButtonHeader"
import { ButtonClassic } from "../../Button/ButtonClassic"

const HeaderClassic = () => {
    return(
        <div className="Header">
            <img className="rockstarIcon"src="https://w0.peakpx.com/wallpaper/776/772/HD-wallpaper-rockstar-games-logo-rockstargames-rokcstar-games.jpg" alt="iconRockstarHeader"></img>
            <div className="lineSeparationHeader"></div>
            <img className="gtaImageHeader"src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg" alt="GTAV Header" />
            <ButtonHeader name=" OverView"></ButtonHeader>
            <ButtonHeader name="GTA Online ▼"></ButtonHeader>
            <ButtonHeader name="Story ▼"></ButtonHeader>
            <ButtonHeader name="GTA+"></ButtonHeader>
            <ButtonHeader name="Community ▼"></ButtonHeader>
            <ButtonHeader name="Support ⇲"></ButtonHeader>
            <ButtonClassic name="BUY NOW"></ButtonClassic>
            <img className="searchIcon"src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt="iconSearchHeader"></img>
            <img className="userIcon"src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt="iconUserHeader"></img>
        </div>
    )
}

export { HeaderClassic };