import React from "react";

type Props = {
  title: string;
  content: string;
  icon: string;
  invert?: boolean;
};

const ServicioCard = (props: Props) => {
  return (
    <div
      className={`flex  items-center ${
        props.invert ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <div className="w-[150px] h-[auto]">
        <img src={props.icon} alt={props.title} />
      </div>
      <div className="h-[30px]"></div>
      <div>
        <p className="text-[25px] lg:text-[25px] text-black font-bold">
          {props.title}
        </p>
        <p className="text-[20px] lg:text-[18px] text-black">{props.content}</p>
      </div>
    </div>
  );
};

export default ServicioCard;
