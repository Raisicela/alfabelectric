import { Link } from "react-router-dom";
import APP_ASSETS from "../../config/assets";
import { ROUTES } from "../../config/enums";
import ServicioCard from "../../components/home/ServicioCard";

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

const Home4 = () => {
  return (
    <div
      className=" flex bg-white flex-col justify-start"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden lg:flex flex-row justify-around bg-black/25 py-8 px-4">
        {brands.map((brand, index) => (
          <img
            key={index}
            className="w-1/12 h-[30px]"
            src={brand}
            alt="Brands"
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex lg:hidden flex-row justify-around bg-black/25 py-4 px-4">
          {brands.slice(0, 3).map((brand, index) => (
            <img
              key={index}
              className="w-1/3 h-[30px]"
              src={brand}
              alt="Brands"
            />
          ))}
        </div>
        <div className="flex lg:hidden flex-row justify-around bg-black/25 py-4 px-4">
          {brands.slice(3, 6).map((brand, index) => (
            <img
              key={index}
              className="w-1/3 h-[30px]"
              src={brand}
              alt="Brands"
            />
          ))}
        </div>
        <div className="flex lg:hidden flex-row justify-around bg-black/25 py-4 px-4">
          {brands.slice(6, 9).map((brand, index) => (
            <img
              key={index}
              className="w-1/3 h-[30px]"
              src={brand}
              alt="Brands"
            />
          ))}
        </div>
        <div className="flex lg:hidden flex-row justify-around bg-black/25 py-4 px-4">
          {brands.slice(9, 10).map((brand, index) => (
            <img
              key={index}
              className="w-1/3 h-[30px]"
              src={brand}
              alt="Brands"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col px-6 lg:px-10 mt-8">
        <p className="font-poppins text-[35px] lg:text-[70px] text-black font-bold">
          Nuestros Servicios
        </p>
        <p className="font-poppins text-[12px] lg:text-[25px] text-black text-justify">
          Proponemos soluciones que incluyen un amplio espectro de productos
          contrastados, de reconocidas marcas internacionales, basados en la más
          alta tecnología. Contamos con equipo de profesionales altamente
          cualificado, para acometer todo tipo de proyectos con absoluta
          eficacia y garantía.
        </p>
        <div className="h-[20px]"></div>

        <div className="flex flex-col lg:hidden items-center justify-center">
          <ServicioCard
            title="Voz y Datos"
            content="Cableado Estructurado"
            icon={APP_ASSETS.HOME_SERVICIO1}
          />
          <ServicioCard
            title="CCTV"
            content="Sistema de video vigilancia"
            icon={APP_ASSETS.HOME_SERVICIO2}
          />
          <ServicioCard
            title="DETECCIÓN"
            content="Sistema contra incendios"
            icon={APP_ASSETS.HOME_SERVICIO3}
          />
          <ServicioCard
            title="ALARMA"
            content="Sistema
            de intrusión"
            icon={APP_ASSETS.HOME_SERVICIO4}
          />
          <ServicioCard
            title="SISTEMA"
            content="Iluminación, audio,
            domótica e inmótica"
            icon={APP_ASSETS.HOME_SERVICIO5}
          />
        </div>
        <div className="lg:flex flex-row hidden items-center justify-between">
          <ServicioCard
            title="Voz y Datos"
            content="Cableado Estructurado"
            icon={APP_ASSETS.HOME_SERVICIO1}
          />
          <ServicioCard
            title="CCTV"
            content="Sistema de video vigilancia"
            icon={APP_ASSETS.HOME_SERVICIO2A}
            invert
          />
          <ServicioCard
            title="DETECCIÓN"
            content="Sistema contra incendios"
            icon={APP_ASSETS.HOME_SERVICIO3}
          />
          <ServicioCard
            title="ALARMA"
            content="Sistema
            de intrusión"
            icon={APP_ASSETS.HOME_SERVICIO4A}
            invert
          />
          <ServicioCard
            title="SISTEMA"
            content="Iluminación, audio,
            domótica e inmótica"
            icon={APP_ASSETS.HOME_SERVICIO5}
          />
        </div>

        <div className="flex flex-row justify-center my-8 w-[100%]">
          <Link
            to={ROUTES.SERVICIOS}
            className="bg-primary text-white w-[220px] text-[20px] rounded-md px-4"
          >
            Todos los servicios
          </Link>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Home4;
