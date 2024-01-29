import { Link } from "react-router-dom";
import APP_ASSETS from "../../config/assets";
import { ROUTES } from "../../config/enums";
import Carrusel from "../../components/home/Carrusel";

const images = [
  APP_ASSETS.HOME_PROYECTOS1,
  APP_ASSETS.HOME_PROYECTOS2,
  APP_ASSETS.HOME_PROYECTOS3,
  APP_ASSETS.HOME_PROYECTOS4,
  APP_ASSETS.HOME_PROYECTOS5,
  APP_ASSETS.HOME_PROYECTOS6,
  APP_ASSETS.HOME_PROYECTOS7,
  APP_ASSETS.HOME_PROYECTOS8,
  APP_ASSETS.HOME_PROYECTOS9,
  APP_ASSETS.HOME_PROYECTOS10,
  APP_ASSETS.HOME_PROYECTOS11,
];

const Home6 = () => {
  return (
    <div
      className=" lg:h-screen flex bg-white flex-col justify-start"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG6})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row items-center justify-around mt-8">
        <div></div>

        <div className="flex flex-col">
          <p className="font-poppins text-primary text-[20px] font-bold">
            / Ver los proyectos
          </p>
          <p className="font-poppins font-bold text-[20px] lg:text-[40px] text-black">
            Nuestro proceso de trabajo
          </p>
        </div>
        <button className="bg-primary text-white text-[20px] rounded-md px-8 py-4 ">
          <Link to={ROUTES.PROYECTOS}>Ver más</Link>
        </button>
      </div>

      <div className="h-[100px]"></div>

      <Carrusel images={images} />
    </div>
  );
};

export default Home6;
