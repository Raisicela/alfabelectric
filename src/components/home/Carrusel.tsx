import React from "react";
import APP_ASSETS from "../../config/assets";

type Props = {
  images: string[];
};

const Carrusel = (props: Props) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <div className="flex flex-col">
      <div className=" mx-2 lg:mx-20">
        <img src={props.images[selected]} alt="Proyectos" />
      </div>
      <div className="flex flex-row mx-2 lg:mx-20 px-0 lg:px-10 -translate-y-[120px] lg:-translate-y-[220px] justify-between">
        <div className="h-[50px] w-[50px] ">
          <button
            onClick={() => {
              if (selected === 0) {
                setSelected(props.images.length - 1);
              } else {
                setSelected(selected - 1);
              }
            }}
          >
            <img src={APP_ASSETS.LOGO_BACK} alt="Back" />
          </button>
        </div>
        <div className="h-[50px] w-[50px]">
          <button
            onClick={() => {
              if (selected === props.images.length - 1) {
                setSelected(0);
              } else {
                setSelected(selected + 1);
              }
            }}
          >
            <img src={APP_ASSETS.LOGO_NEXT} alt="Back" />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-between mb-8 mx-20">
        {props.images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[80px] h-[auto]"
          >
            <button onClick={() => setSelected(index)}>
              <img src={image} alt="Proyectos" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
