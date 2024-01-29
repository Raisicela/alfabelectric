import { Link } from "react-router-dom";
import APP_ASSETS from "../../config/assets";
import { ROUTES } from "../../config/enums";

const brands = [
  APP_ASSETS.HOME_BRAND1,
  APP_ASSETS.HOME_BRAND2,
  APP_ASSETS.HOME_BRAND3,
  APP_ASSETS.HOME_BRAND4,
  APP_ASSETS.HOME_BRAND5,
  APP_ASSETS.HOME_BRAND6,
  APP_ASSETS.HOME_BRAND7,
  APP_ASSETS.HOME_BRAND8,
  APP_ASSETS.HOME_BRAND9,
  APP_ASSETS.HOME_BRAND10,
];

const Home5 = () => {
  return (
    <div
      className="h-screen flex bg-white flex-col justify-between"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div></div>
      <div className="flex flex-col">
        <p className="text-[35px] lg:text-[70px]">Proyectos</p>
        <p className="text-[12px] lg:text-[25px]">
          Si lo puedes imaginar, lo puedes hacer realidad
        </p>
      </div>
      <div className="flex flex-col items-center mb-10 ">
        <p>Desplazar abajo</p>
        <div className="w-[70px] h-[auto]">
          <img src={APP_ASSETS.LOGO_MOUSE} alt="Desplazar abajo" />
        </div>
      </div>
    </div>
  );
};

export default Home5;
