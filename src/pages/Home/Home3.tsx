import APP_ASSETS from "../../config/assets";
import { Link } from "react-router-dom";
import URLS, { ROUTES } from "../../config/enums";

const Home3 = () => {
  return (
    <div
      className="h-screen flex bg-white flex-row justify-around"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:w-7/12 items-center lg:items-start lg:px-8">
        <p className="font-bold text-[40px] lg:text-[70px] text-black text-center lg:text-start pt-10">
          Sobre Nosotros
        </p>
        <p className="text-[12px] lg:text-[25px] px-8 lg:px-0 text-justify text-black">
          Somos una empresa que mediante sus conocimientos de eléctrica y
          electrónica ofrecemos soluciones tecnológicas a los diferentes
          establecimientos que requieran de seguridad, iluminación, voz o audio
          para su sistema de negocio.
        </p>

        <Link
          to={ROUTES.NOSOTROS}
          className="bg-primary text-white w-[170px] rounded-md mt-5"
        >
          Ver más
        </Link>

        <div className="flex w-[auto] h-[200px] my-8 lg:h-[300px]">
          <img
            className="w-[auto] h-[200px] lg:h-[300px]"
            src={APP_ASSETS.HOME_ABOUT1}
            alt="About Us"
          />
        </div>
      </div>
      <div className=" hidden lg:flex flex-col w-5/12 justify-center items-center">
        <img
          className="w-[440px] h-[700px]  "
          src={APP_ASSETS.HOME_ABOUT2}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default Home3;
