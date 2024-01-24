import "./styles.css"

import { HeaderClassic } from "../components/Header/HeaderClassic";
import { HeaderGTAVI } from "../components/Header/HeaderGTAVI";
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
      </div>
    </div>
  );
}

export default App;
