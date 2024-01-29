import { Link } from "react-router-dom";
import APP_ASSETS from "../../config/assets";
import URLS, { ROUTES } from "../../config/enums";
import sendEmail from "../../services/mail";

const Home9 = () => {
  return (
    <div
      className="flex flex-col justify-around bg-black  "
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG9})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <div className="w-[220px] h-[auto] my-8">
            <img
              src={APP_ASSETS.LOGO_WHITE}
              alt="Alfab Electric"
              width={222}
              height={112}
            />
          </div>
          <div className="flex flex-row gap-10 justify-center my-8">
            <button onClick={() => window.open(URLS.INSTAGRAM, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_INSTAGRAM_B}
                alt="Instagram"
                width={40}
                height={40}
              />
            </button>
            <button onClick={() => window.open(URLS.FACEBOOK, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_FACEBOOK_B}
                alt="Facebook"
                width={40}
                height={40}
              />
            </button>
            <button onClick={() => window.open(URLS.LINKEDIN, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_LINKEDIN_B}
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </button>
            <button onClick={() => window.open(URLS.TIKTOK, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_TIKTOK_B}
                alt="TikTok"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center bg-primary py-8 px-8 mx-8 rounded-md">
            <p className="font-poppins text-[30px] font-bold">
              Contáctate con nosotros
            </p>
            <p className="font-poppins text-[20px] text-justify">
              ¿Necesitas más asesoría o información sobre los nuestros productos
              o servicios?.
            </p>
            <button className=" w-[146px] bg-white rounded-md text-[20px]">
              <Link to={ROUTES.CONTACTENOS} className="text-primary">
                Contactos
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="border-primary border-t-[2px] my-8 py-4 ">
        <p className="text-white text-center font-poppins text-[8px] px-2 md:text-[15px] md:px-4 ">
          Copyright 2023 ALFAB Electric Solutions SAS by GS Design. Todos los
          Derechos Reservados
        </p>
      </div>
    </div>
  );
};

export default Home9;
