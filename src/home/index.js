import "./styles.css"
import '../fonts/ChaletComprime CologneSixty.ttf'
import { HeaderClassic } from "../components/Header/HeaderClassic";
import { HeaderGTAVI } from "../components/Header/HeaderGTAVI";
import { ButtonClassic } from "../components/Button/ButtonClassic";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

register();


function App() {

  const data = [
    {
      id: '1',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/2a1k4/4efde3b3ce13f6254f61e546d69d445815994b9d.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/2a1k4/e85e9f8e4eeae2cdec44a400d5dfd19d2926e6c1.png",
    },
    {
      id: '2',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/o488o/fc3a0ec038fd328ef71472d4e3ce0e34033452f7.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/o488o/f4f329a95476cc66a3229df1c15b56af26b76974.png",
    },
    {
      id: '3',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k95o9/b07956f936efbdaab48d116115e954965d51b4ee.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k95o9/a9258f52c65813174d0d8a4e0afa47d31b8a6d2b.png",
    },
    {
      id: '4',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/b95c9216031ec9be1026854d94520e54b8355a58.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/8659968427ae261815d81669705e4d37472affe6.png",
    },
    {
      id: '5',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/5db065980388e9f1bff9e4db64d9e74556245ce8.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/4ff07bc5a78d5de03deb1bd10cdc94ea0ab1a4eb.png",
    },
    {
      id: '6',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/ea6bfdeb8147a4a83510ae012e8878dfd35db766.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/324bf40f25d71c1540c56fa350b464bfa4bc024b.png",
    },
    {
      id: '7',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/37f1bba624c46fb876090b7b2f1f96ad16835e8a.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/cbe2e5dc628b28e51821ca3f3a42a8d5a6f4bf07.png",
    },
    {
      id: '8',
      backgroundImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/6f2273bb92e0fd35ef7636575651e0cff17ac869.jpg",
      mainImage: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/c4aaed728a0ede830dca12d8d17ae95262b9c4fa.png",
    },
  ];

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
          <br /><br />
          <h3 className="sloganh3">Experience entertainment blockbusters, Grand Theft Auto V and GTA Online.</h3>
        </div>
        <div className="sloganButtons">
          <ButtonClassic className="bigButton1" name="WATCH THE TRAILER"></ButtonClassic>
          <ButtonClassic className="bigButton2" name="BUY NOW"></ButtonClassic>
        </div>
      </div>
      <div className="wallpaperContainer2">
        <img className="wallpaperPalmeiras" src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-v/911bff9fca5209b94dd22bcba795eefdd4b71993.jpg" alt="secondWallpaper"></img>
        <img className="wallpaperTrio" src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-v/9ca23774eb886a9dce533874723e35ce7a825f5d.png" alt="wallpaperTrio"></img>
        <img className="wallpaperGtaV23" src="https://freepngimg.com/download/gta/20226-7-grand-theft-auto-v.png" alt="wallpaperGtaV23" />
        <div className="slogan2">
          <h1 className="sloganh1">Welcome to Los Santos</h1>
          <br />
          <h3 className="sloganh33">When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other. <br /><br /><br />Current players can transfer both GTAV Story Mode progress and GTA Online characters and progression to PlayStation 5 and Xbox Series X|S with a one-time migration.</h3>
        </div>
        <div className="wallpaperBlack"></div>
        <img className="wallpaperTrio2" src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-v/224f9a314a45e5828e9af56153f8871c06290689.png" alt="wallpaperGtaV2"></img>
        <img className="wallpaperGtaV25" src="https://freepngimg.com/thumb/gta/113583-grand-auto-pic-online-theft-v.png" alt="wallpaperGtaV25" />
        <div className="slogan3">
          <h1 className="sloganh1">Grand Theft Auto Online</h1>
          <br />
          <h3 className="sloganh33">Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin of your own criminal empire.<br /><br />Enjoy new high-performance vehicle upgrades and improvements like the Career Builder as well as all GTA Online gameplay upgrades, expansions, and content released since launch, ready to enjoy solo or with friends. Pull off daring co-operative Heists, enter adrenaline-fueled Stunt Races, compete in unique Adversary Modes, or hang out in social spaces including nightclubs, arcades, penthouse parties, car meetups, and much more.</h3>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div className="flex">
            <h1 className="sloganh12">Updates</h1>
            <ButtonClassic className="buttonClassic22" name="<"></ButtonClassic>
            <ButtonClassic className="buttonClassic2" name=">"></ButtonClassic>
          </div>

          <Swiper
            slidesPerView={2}
            pagination={{ clickable: true }}
            navigation
            centeredSlides
            grabCursor={{ clickable: true}}
            
            className="swiper-container"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide-content">
                  <img src={item.backgroundImage} alt="Background" className="background-image" />
                  <img src={item.mainImage} alt="Main" className="main-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default App;
