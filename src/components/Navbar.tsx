import React from "react";
import APP_ASSETS from "../config/assets";
import { NavbarItem } from "./NavbarItem";
import URLS, { ROUTES } from "../config/enums";
// import Brochure from "../../public/assets/Brochure.pdf";

enum NavbarItemEnum {
  INICIO = "INICIO",
  NOSOTROS = "NOSOTROS",
  SERVICIOS = "SERVICIOS",
  PROYECTOS = "PROYECTOS",
  CONTACTENOS = "CONTACTENOS",
}

export const Navbar = () => {
  const [selected, setSelected] = React.useState<NavbarItemEnum>(
    NavbarItemEnum.INICIO
  );
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <nav className="hidden lg:block px-4 top-0 bg-white w-[100%] border-[#1999D6] border-b-[2px]">
        <div className="flex flex-row justify-around py-5">
          <div className="">
            <img
              src={APP_ASSETS.LOGO}
              alt="Alfab Electric"
              width={222}
              height={112}
            />
          </div>
          <ul className="flex flex-row items-center">
            <NavbarItem
              title={NavbarItemEnum.INICIO}
              link={ROUTES.INICIO}
              selected={selected === NavbarItemEnum.INICIO}
              onClick={() => setSelected(NavbarItemEnum.INICIO)}
            />
            <NavbarItem
              title={NavbarItemEnum.NOSOTROS}
              link={ROUTES.NOSOTROS}
              selected={selected === NavbarItemEnum.NOSOTROS}
              onClick={() => setSelected(NavbarItemEnum.NOSOTROS)}
            />
            <NavbarItem
              title={NavbarItemEnum.SERVICIOS}
              link={ROUTES.SERVICIOS}
              selected={selected === NavbarItemEnum.SERVICIOS}
              onClick={() => setSelected(NavbarItemEnum.SERVICIOS)}
            />
            <NavbarItem
              title={NavbarItemEnum.PROYECTOS}
              link={ROUTES.PROYECTOS}
              selected={selected === NavbarItemEnum.PROYECTOS}
              onClick={() => setSelected(NavbarItemEnum.PROYECTOS)}
            />
            <NavbarItem
              title={NavbarItemEnum.CONTACTENOS}
              link={ROUTES.CONTACTENOS}
              selected={selected === NavbarItemEnum.CONTACTENOS}
              onClick={() => setSelected(NavbarItemEnum.CONTACTENOS)}
            />
            <button className="bottom-0 mx-8 float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded-full focus:outline-none">
              <a
                href={process.env.PUBLIC_URL + "/assets/Brochure.pdf"}
                download="Brochure.pdf"
              >
                Brochure
              </a>
            </button>
          </ul>
        </div>
      </nav>
      <div className="z-50 visible lg:hidden">
        <nav className="top-0 bg-white w-screen">
          <div className="flex flex-row items-center justify-between py-5 px-5">
            <button onClick={() => setExpanded(!expanded)}>
              <img
                className="w-5 h-5"
                src={APP_ASSETS.MENU}
                alt="menu"
                //  width={25} height={25}
              />
            </button>

            <img
              src={APP_ASSETS.LOGO}
              alt="Alfab Electric"
              width={89}
              height={45}
            />
          </div>
        </nav>
        {expanded && (
          <div
            className="w-screen h-screen top-0 left-0 fixed"
            onClick={() => setExpanded(false)}
          >
            <div className="bg-[#D9D9D9] h-screen w-[70%]">
              <ul className="flex flex-col pt-10 gap-10 items-start">
                <NavbarItem
                  title={NavbarItemEnum.INICIO}
                  link={ROUTES.INICIO}
                  selected={selected === NavbarItemEnum.INICIO}
                  onClick={() => setSelected(NavbarItemEnum.INICIO)}
                />
                <NavbarItem
                  title={NavbarItemEnum.NOSOTROS}
                  link={ROUTES.NOSOTROS}
                  selected={selected === NavbarItemEnum.NOSOTROS}
                  onClick={() => setSelected(NavbarItemEnum.NOSOTROS)}
                />
                <NavbarItem
                  title={NavbarItemEnum.SERVICIOS}
                  link={ROUTES.SERVICIOS}
                  selected={selected === NavbarItemEnum.SERVICIOS}
                  onClick={() => setSelected(NavbarItemEnum.SERVICIOS)}
                />
                <NavbarItem
                  title={NavbarItemEnum.PROYECTOS}
                  link={ROUTES.PROYECTOS}
                  selected={selected === NavbarItemEnum.PROYECTOS}
                  onClick={() => setSelected(NavbarItemEnum.PROYECTOS)}
                />
                <NavbarItem
                  title={NavbarItemEnum.CONTACTENOS}
                  link={ROUTES.CONTACTENOS}
                  selected={selected === NavbarItemEnum.CONTACTENOS}
                  onClick={() => setSelected(NavbarItemEnum.CONTACTENOS)}
                />
                <button
                  className="bottom-0 mx-8 float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
                  onClick={() => window.open(URLS.BROCHURE, "_blank")}
                >
                  Brochure
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
