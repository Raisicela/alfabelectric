import { useState } from "react";
import style from "./WhyCard.module.css";

type WhyCardProps = {
  title: string;
  content: string;
  icon: string;
};
function WhyCard(props: WhyCardProps) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={`${
        hover
          ? "bg-[#BABABA] "
          : "bg-gradient-to-b from-[#1999D6] to-[#1999D600]"
      } flex flex-col  w-[40vw] lg:w-1/5 h-[40vw] lg:h-[320px] rounded-md items-center justify-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!hover ? (
        <>
          <div className="bg-primary rounded-md w-[80px] h-[80px] flex items-center justify-center mb-5">
            <img src={props.icon} alt={props.title} width={50} height={50} />
          </div>
          <p>{props.title}</p>
        </>
      ) : (
        <p className="text-[#0366AA] text-center font-poppins text-[8px] px-2 md:text-[15px] md:px-4 ">
          {props.content}
        </p>
      )}
    </div>
    // <div>
    //   <div className="flex flex-col bg-gradient-to-b from-[#1999D6] to-[#1999D600]  w-1/4 mx-2 h-[320px] rounded-md items-center justify-center">
    //     <p>{props.title}</p>
    //   </div>
    // </div>
  );
}

export default WhyCard;
