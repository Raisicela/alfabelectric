"use client";
import React from "react";
import APP_ASSETS from "../config/assets";
import URLS from "../config/enums";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <button
        className="bottom-0 my-8 float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded-l-full focus:outline-none"
        onClick={() => window.open(URLS.WHATSAPP, "_blank")}
      >
        <img
          src={APP_ASSETS.LOGO_WHATSAPP}
          alt="Instagram"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default WhatsappButton;
