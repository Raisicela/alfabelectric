import WhyCard from "../../components/home/WhyCard";
import APP_ASSETS from "../../config/assets";

const Home2 = () => {
  return (
    <div className=" h-min lg:h-screen flex flex-col bg-black justify-around pt-4">
      <div>
        <p className="font-bold text-[40px] lg:text-[70px] text-white">
          POR QUÉ ELEGIRNOS
        </p>
        <p className="text-[12px] md:text-[18px] lg:text-[25px] text-justify px-4 md:px-20 lg:px-40 mt-5">
          Entendemos que cada cliente es único, al igual que sus necesidades.
          Nos tomamos el tiempo para escuchar atentamente sus preferencias,
          prioridades y estilo de vida.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mt-4">
        <WhyCard
          title="Somos éticos"
          icon={APP_ASSETS.HOME_WHY1}
          content="Llevamos más de 15 años trabajando
                    para ser una empresa ética y honesta,
                    mantenemos relaciones a largo plazo con nuestros clientes y recibimos
                    muchas recomendaciones que nos
                    demuestran que vamos en un correcto camino de contínua mejora."
        />
        <WhyCard
          title="Cumplimos"
          icon={APP_ASSETS.HOME_WHY2}
          content="Siempre buscaremos una alternativa que sea de utilidad y calidad para lograr su objetivo."
        />
        <WhyCard
          title="Construimos"
          icon={APP_ASSETS.HOME_WHY3}
          content="Relaciones a largo plazo. Algunos de nuestros clientes trabajan con nosotros desde el día que fundamos
                    ALFAB, y otros desde que iniciaron la relación con nuestra empresa. Es una satisfacción atenderlos y ayudarlos en cada nuevo proyecto
                    que encaran."
        />
        <WhyCard
          title="Calidad"
          icon={APP_ASSETS.HOME_WHY4}
          content="La calidad es nuestro compromiso
                      con las empresas y clientes que confían en nosotros.
                      En ALFAB evaluamos todo, nuestros
                      procesos están sometidos a una constante evaluación, así como nuestros productos, empleados, documentación, pruebas de funcionamiento y comunicación."
        />
      </div>
    </div>
  );
};

export default Home2;
