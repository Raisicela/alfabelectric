import React from "react";
import APP_ASSETS from "../../config/assets";
import Servicio from "../../components/servicios/Servicio";

const Servicio1 = () => {
  return (
    <div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_1}
        titulo="Voz y Datos"
        subtitulo="Cableado estructurado"
        imagen={APP_ASSETS.SERVICIOS_IMG1}
        titulo_2="Instalación"
        subtitulo_2="y mantenimiento"
        contenido="Cableado estructurado para voz y datos en categoría 5, 5e, 6 y fibra óptica. Diseñamos nuestras soluciones siguiendo los estándares internacionales garantizando altos niveles de calidad."
        lista_servicios={[
          "Diseño e instalación de redes de cableado estructura de datos y voz.",
          "Instalación y configuración de dispositivos de alta calidad (switch, routers, antenas, módems, repetidores).",
          "Cableado estructurado para telefonía.",
          "Peinado de racks.",
          "Escaneo de servicios voz y datos.",
          "Cableado estructurado para audio y video.",
          "Cableado para CCTV.",
          "Instalación de nodos de fibra óptica.",
          "Diseño, mantenimiento y adecuación de sites.",
          "Empalme y fusión de fibra óptica.",
          "Identificación y etiquetado de servicios.",
        ]}
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_2}
        titulo="Videovigilancia"
        subtitulo="CCTV"
        imagen={APP_ASSETS.SERVICIOS_IMG2}
        titulo_2="Tecnología"
        subtitulo_2="visual"
        contenido="Diseñada para supervisar una diversidad de ambientes y actividades; para lo cual se equipan de características de visión nocturna, monitoreo remoto, detecciones de movimiento, generación de alarmas y capacidad de grabación. Tenemos soluciones de CCTV para empresas y hogares con las marcas más populares de la industria ofreciendo soluciones integrales de seguridad perimetral."
        lista_servicios={[
          "Soluciones de seguridad perimetral.",
          "Diseño e inspección del lugar, asesoría para mejor ubicación de dispositivos.",
          "Instalación de dispositivos de alta calidad acorde a las características requeridas por el cliente (cámaras IP, análogas, PTZ, DVR, NVR).",
          "Cableado estructurado CCTV siguiendo los estándares internacionales vigentes.",
          "Sistemas de video que permitan ser visualizados y gestionados desde uno o varios lugares.",
          "Validación de dispositivos preexistentes para acoplar al nuevo sistema de CCTV.",
          "Capacitación personalizada.",
        ]}
        invertir={true}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_3}
        titulo="Detección"
        subtitulo="Contra incendios"
        imagen={APP_ASSETS.SERVICIOS_IMG3}
        titulo_2="Sistemas"
        subtitulo_2="y equipos"
        contenido="Los sistemas y equipos que proveemos e implementamos
        son de detección temprana, altamente confiables y fiables para evitar falsas alarmas, tenemos soluciones
        para empresas y hogares con las marcas más populares
        de la industria ofreciendo soluciones de efectividad ante un posible incendio."
        lista_servicios={[
          "Diseño e instalación de dispositivos de la más alta calidad: centrales de incendios, sensores, estaciones manuales, luces estroboscópicas y entre otros dispositivos que componen el sistema de incendios.",
          "Cableado estructurado del sistema mediante las normas respectivas NFPA.",
          "Inspección del lugar, asesoría para la mejor ubicación de los equipos.",
          "Configuración de centrales de incendios.",
          "Realización de memoria técnica final. Capacitación personalizada.",
        ]}
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_4}
        titulo="Sistema"
        subtitulo="de intrusión Alarma"
        imagen={APP_ASSETS.SERVICIOS_IMG4}
        titulo_2="Seguridad"
        subtitulo_2="para tí y tu familia"
        contenido="Cableado estructurado para voz y datos en categoría 5, 5e, 6 y fibra óptica. Diseñamos nuestras soluciones siguiendo los estándares internacionales garantizando altos niveles de calidad."
        lista_servicios={[
          "Diseño e instalación de dispositivos de la más alta calidad: centrales de intrusión, sensores, llaveros, sirenas y otros dispositivos que componen el sistema.",
          "Inspección del lugar, asesoría para la mejor ubicación de los equipos.",
          "Realización de planos y memoria técnica final.",
          "Cableado estructurado del sistema mediante las normas respectivas.",
          "Montaje de los dispositivos y tarjetas de control.",
          "Validación de dispositivos preexistentes para acoplar al nuevo sistema de intrusión.",
          "Capacitación personalizada.",
        ]}
        invertir={true}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_5}
        titulo="Sistema"
        subtitulo="Contra Acceso"
        imagen={APP_ASSETS.SERVICIOS_IMG5}
        titulo_2="Sistema"
        subtitulo_2="mediante relojes biométricos"
        contenido="Brinda mejor control de asistencia y acceso del personal
        a su empresa, instituciones, conjuntos residenciales. Nuestros equipos cuentan con reconocimiento facial y de huella, tecnologías que garantizan una rápida identificación del personal dando seguridad a los usuarios."
        lista_servicios={[
          "Diseño e instalación de dispositivos de la más alta calidad con tecnologías de última generación acorde a lo requerido por el sitio a ser instalado. (RFID, detección biométrica de huella y rostro)",
          "Instalar dispositivos para el control de accesos que manejan un protocolo de comunicación con dispositivos ya instalados en el sitio.",
          "Instalar y configurar llaves y cerraduras electrónicas.",
          "Cableado estructurado del sistema mediante las normas respectivas.",
          "Inspección del lugar, asesoría para la mejor ubicación de dispositivos.",
          "Montaje de los dispositivos y tarjetas de control.",
          "Configuración y validación de cada uno de los dispositivos instalados.",
          "Realización de planos y memoria técnica final.",
          "Capacitación personalizada.",
        ]}
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_6}
        titulo="Iluminación"
        subtitulo="Instalaciones eléctricas."
        imagen={APP_ASSETS.SERVICIOS_IMG6}
        titulo_2="Sistemas"
        subtitulo_2="de iluminación profesionales, comerciales y técnicos."
        contenido="Instalaciones eléctricas que se adaptan de manera perfecta a cada una de sus necesidades y proyectos de iluminación sean estas casas, residencias, oficinas,
        hoteles, locales comerciales, etc. Contamos con una gama de profesionales altamente calificados para tramitar la documentación ante los organismos oficiales
        correspondientes, además de, asesorar, gestionar y ejecutar el proyecto con garantía."
        lista_servicios={[
          "Diseño de planos eléctricos de residencias, hoteles, oficinas, edificios, instituciones académicas.",
          "Instalación de sistemas eléctricos en viviendas, hoteles, edificios, instituciones académicas.",
          "Diseño de iluminación interior e iluminación decorativa para diferentes sectores.",
          "Proyectos, diseño e instalación de planos y memoria técnica final.",
        ]}
        invertir={true}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_7}
        titulo="Sistema"
        subtitulo="de Audio"
        imagen={APP_ASSETS.SERVICIOS_IMG7}
        titulo_2="Instalación"
        subtitulo_2="y mantenimiento"
        contenido="Sistemas de audio que brindan un mayor confort en el ambiente que requiera su instalación sean estos edificios, locales comerciales, viviendas, etc. Diseñamos nuestras soluciones basadas en los estándares más altos de calidad."
        lista_servicios={[
          "Diseño de planos.",
          "Instalación de sistemas de audio con normas internacionales.",
          "Diseño e instalación de amplificadores y diferentes dispositivos (parlantes, micrófonos, subuffer’s, etc).",
          "Instalación y diseño de sistemas Audiovisuales (Proyectores, salas de entretenimiento, salas de estudio).",
          "Capacitación personalizada.",
        ]}
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_8}
        titulo="Domótica"
        subtitulo="e Inmótica"
        imagen={APP_ASSETS.SERVICIOS_IMG8}
        titulo_2="Servicio"
        subtitulo_2="de control inteligente"
        contenido="Instalación, programación, operación de sensores, controladores y actuadores. El sistema de domótica permite monitorear y gestionar en tiempo real ya sea de manera local o remota los diferentes sistemas dentro
        del hogar desde un asistente de voz, computador, tablet o smartphone."
        lista_servicios={[
          "Inspección del lugar, para la mejor ubicación de los dispositivos.",
          "Instalar dispositivos de domótica que maneja un protocolo de comunicación con dispositivos ya instalados en el sitio.",
          "Instalar dispositivos que permitan controlar varios factores dentro del hogar como temperatura, control de iluminación, entretenimiento, video vigilancia, seguridad electrónica.",
          "Instalar y configurar dispositivos de domótica con el fin de realizar ahorro energético, comodidad y seguridad al usuario.",
          "Realización de memorias finales.",
          "Capacitación personalizada.",
        ]}
        invertir={true}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_9}
        titulo="Sistema"
        subtitulo="de Automatización"
        imagen={APP_ASSETS.SERVICIOS_IMG9}
        titulo_2="Instalación"
        subtitulo_2="y mantenimiento"
        contenido="Servicio de desarrollos e innovaciones tecnológicas, con la finalidad de dar confort a los usuarios en cualquier
        proceso, de una manera automática, confiable y segura que mejor se adapte a las necesidades del cliente."
        lista_servicios={[
          "Inspección y asesoría para la instalación de los dispositivos de automatización.",
          "Realización de tableros eléctricos y de control para ahorro energético.",
          "Diseño e implementación de módulos didácticos para el aprendizaje de los estudiantes de universidades, colegios técnicos, tecnológicos (PLC, variadores).",
          "Análisis de los sistemas de automatización instalados, revisión y arreglo de estos.",
          "Realización de montaje de todo el cableado estructurado mediante las normas establecidas.",
          "Configuración y programación acorde al proceso de automatización requerido, utilizando dispositivos de última variación de memorias técnicas finales.",
          "Capacitación personalizada.",
        ]}
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_10}
        titulo="Parqueaderos"
        subtitulo="Tecnología de Automatización"
        imagen={APP_ASSETS.SERVICIOS_IMG10}
        titulo_2="Servicio"
        subtitulo_2="de control inteligente"
        contenido="Este sistema posee la gran ventaja de ser versátil y práctico tanto para los usuarios como para los operadores,
        desde el módulo de caja de cobro al operador, le permite
        llevar un control ágil y simple del manejo de los tickets
        o de los elementos que conforman el sistema de estacionamiento."
        lista_servicios={[
          "Inspección y asesoría para la mejor ubicación tanto de los dispositivos como del sistema.",
          "Instalar sistemas de salida de personas dentro de zonas residenciales, hoteles, centros comerciales, con tecnologías de última generación como reconocimiento RFID, sistema de tarjetas (código de barras) y otros.",
          "Cableado estructurado mediante las normas establecidas.",
          "Centralización del sistema mediante software para una gestión adecuada de los datos.",
          "Obra civil para la instalación de módulos de parking.",
          "Elaboración de memorias técnicas finales.",
          "Capacitación personalizada.",
        ]}
        invertir={true}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_11}
        titulo="Mantenimiento"
        subtitulo="de Sistemas Especiales"
        imagen={APP_ASSETS.SERVICIOS_IMG11}
        titulo_2="Instalación"
        subtitulo_2="y mantenimiento"
        contenido="Todo equipo electrónico requiere de mantenimiento preventivo y correctivo, este servicio lo ofrecemos con
        la finalidad de prevenir daños o problemas futuros en
        sus instalaciones, significándole un ahorro a su empresa."
        lista_servicios={[
          "Sistema de voz y datos.",
          "Circuito cerrado de televisión.",
          "Sistema de incendios.",
          "Sistema de intrusión.",
          "Control de accesos.",
          "Automatización e iluminación.",
          "Parqueadero inteligente",
          "Sistema eléctrico",
        ]}
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_12}
        titulo="Mobiliario"
        subtitulo="Comercial"
        imagen={APP_ASSETS.SERVICIOS_IMG12}
        titulo_2="Espacios"
        subtitulo_2="funcionales"
        contenido="Nos especializamos en ofrecer soluciones de mobiliario
        comercial de alta calidad y diseño innovado para satisfacer las necesidades de tu negocio. Nuestro objetivo,
        ayudarte a crear espacios funcionales, atractivos y eficientes que impulsen el éxito de nuestros clientes."
        lista_servicios={[
          "Diseño de espacios comerciales.",
          "Diseño de mobiliarios comerciales.",
          "Fabricación de mobiliario comercial.",
          "Mantenimiento de mobiliario comercial.",
          "Iluminación de mobiliario comercial.",
          "Instalación y desinstalación de mobiliario.",
        ]}
        invertir={true}
      />
      <div>
        <img
          src={APP_ASSETS.SERVICIOS_TRANSICION}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Servicio
        icono_number={APP_ASSETS.SERVICIOS_NUMBER_13}
        titulo="Señalización"
        subtitulo="y publicidad"
        imagen={APP_ASSETS.SERVICIOS_IMG13}
        titulo_2="Campo"
        subtitulo_2="Comercial e Insdustrial"
        contenido="Señalización comercial e industrial al igual que publicidad para ayudarte a promocionar tu marca y captar la atención de tus clientes. Ya sea que necesites
        letreros exteriores llamativos, banners promocionales o carteles informativos para eventos, nuestro equipo creativo trabajará contigo para desarrollar soluciones
        a medida que se alinien con tu identidad de marca y objetivos comerciales."
        lista_servicios={[
          "Señalética interna y externa.",
          "Letreros exteriores (Luminosos y no luminosos).",
          "Letreros corpóreos.",
          "Brandéo de vehículos.",
          "Activaciones.",
          "Banners y Roll Ups.",
          "Backing.",
          "Diseño gráfico.",
        ]}
        invertir={false}
      />
    </div>
  );
};

export default Servicio1;
