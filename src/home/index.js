import "./styles.css"
import '../fonts/ChaletComprime CologneSixty.ttf'

import { HeaderClassic } from "../components/Header/HeaderClassic";
import { HeaderGTAVI } from "../components/Header/HeaderGTAVI";
import { ButtonClassic } from "../components/Button/ButtonClassic";
//import { ButtonClassic } from "../components/Button/ButtonClassic";

function App() {
  return (
    <div>
      <HeaderGTAVI></HeaderGTAVI>
      <HeaderClassic></HeaderClassic>
      <div className="wallpaperContainer">
        <img className="wallpaper" src="https://blog.turtlebeach.com/wp-content/uploads/2022/03/GTA-Online-Skyline-scaled.jpeg" alt="wallpaper" />
        <div className="overlay"></div>
        <img className="wallpaperGtaV" src="https://freepngimg.com/download/gta/20226-7-grand-theft-auto-v.png" alt="wallpaperGtaV" />
        <img className="wallpaperGtaV2" src="https://freepngimg.com/thumb/gta/113583-grand-auto-pic-online-theft-v.png" alt="wallpaperGtaV2" />
        <div className="slogan">
          <h1 className="sloganh1">Now available for PS5 and Xbox Series X|S</h1>
          <br></br><br></br>
          <h3 className="sloganh3">Experience entertainment blockbusters, Grand Theft Auto V and GTA Online.</h3>
        </div>
        <div className="sloganButtons">
          <ButtonClassic className="bigButton1" name="WATCH THE TRAILER"></ButtonClassic>
          <ButtonClassic className="bigButton2" name="BUY NOW"></ButtonClassic>
        </div>
      </div>
    </div>
  );
}

export default App;
