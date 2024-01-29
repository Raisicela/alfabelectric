import APP_ASSETS from "../../config/assets";

type cardProps = {
  title: string;
  content: string;
};

const Card = (props: cardProps) => {
  return (
    <div className="my-10">
      <p className="text-primary text-[70px]">{props.title}</p>
      <p className="text-black text-[20px]">{props.content}</p>
    </div>
  );
};

const Home8 = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-around bg-white"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG8})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card title="+15" content="MARCAS" />
      <Card title="+25" content="VENTA DE PRODUCTOS" />
      <Card title="+15" content="AÑOS DE EXPERIENCIA" />
      <Card title="6" content="PREMIOS DE CALIDAD" />
    </div>
  );
};

export default Home8;
