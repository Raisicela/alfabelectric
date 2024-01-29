import Footer from "../components/Footer";
import ProyectosComponent from "../components/proyectos/Proyectos";
import APP_ASSETS from "../config/assets";

const Proyectos = () => {
  return (
    <>
      <main>
        <ProyectosComponent
          title="/ Empresa H&M"
          subtitle="Diseño de espacio mobiliario, implementación de equipo de
        video vigilancia."
          mainImage={APP_ASSETS.PROYECTO1_1}
          number="01"
          title2="Mobiliario"
          subtitle2="Comercial"
          images={[
            APP_ASSETS.PROYECTO1_2,
            APP_ASSETS.PROYECTO1_3,
            APP_ASSETS.PROYECTO1_4,
            APP_ASSETS.PROYECTO1_5,
          ]}
          invert={true}
        />
        <div className="h-[100px] bg-white" />
        <ProyectosComponent
          title="/ Empresa PULL AND BEAR"
          subtitle="Implementación de iluminación y video vigilancia."
          mainImage={APP_ASSETS.PROYECTO2_1}
          number="02"
          title2="Video"
          subtitle2="Vigilancia"
          images={[
            APP_ASSETS.PROYECTO2_2,
            APP_ASSETS.PROYECTO2_3,
            APP_ASSETS.PROYECTO2_4,
            APP_ASSETS.PROYECTO2_5,
          ]}
          invert={false}
        />
        <div className="h-[100px] bg-white" />
        <ProyectosComponent
          title="/ Empresa ZARA"
          subtitle="Diseño de espacio mobiliario, sistema de iluminación."
          mainImage={APP_ASSETS.PROYECTO3_1}
          number="03"
          title2="Iluminación"
          subtitle2="Profesional"
          images={[
            APP_ASSETS.PROYECTO3_2,
            APP_ASSETS.PROYECTO3_3,
            APP_ASSETS.PROYECTO3_4,
            APP_ASSETS.PROYECTO3_5,
          ]}
          invert={true}
        />
        <div className="h-[100px] bg-white" />
      </main>
      <Footer />
    </>
  );
};

export default Proyectos;
