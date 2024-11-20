import databiz from "./assets/images/client-databiz.svg";
import audio_philid from "./assets/images/client-audiophile.svg";
import meet from "./assets/images/client-meet.svg";
import marker from "./assets/images/client-maker.svg";

import hero_desktop from "./assets/images/image-hero-desktop.png";
import hero_mobile from "./assets/images/image-hero-mobile.png";

const Body = () => {
  return (
    <div className="md:flex md:justify-around px-5 md:p-10 w-full max-w-screen-2xl md:mt-10">
      <div className="w-full md:hidden mt-5">
        <img src={hero_mobile} alt="" />
      </div>
      <div>
        <div className="md:flex text-center md:text-start md:flex-col text-5xl lg:text-7xl font-bold my-10">
          <span>Make</span> <span>remote work</span>
        </div>
        <p className="md:max-w-96 text-medium_gray my-5 text-center px-5 md:px-0 md:text-start">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="flex items-center justify-center md:block mb-10 md:mb-2">
          <button className="md:my-10 bg-almost_black hover:bg-almost_white text-almost_white hover:text-almost_black font-bold border border-almost_black py-3 px-5 rounded-xl">
            Learn more
          </button>
        </div>
        <div className="flex items-center justify-between">
          <img src={databiz} alt="" />
          <img src={audio_philid} alt="" />
          <img src={meet} alt="" />
          <img src={marker} alt="" />
        </div>
      </div>
      <div className="hidden md:block md:w-80 lg:w-96">
        <img src={hero_desktop} alt="" />
      </div>
    </div>
  );
};

export default Body;
