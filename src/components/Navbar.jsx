import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logoo } from "../assets";


const Navbar = () => {
  const [active, SetActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            SetActive(" ");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Franklin &nbsp;{" "}
            <span className="sm:block hidden">
              {" "}
              <span className="text-[#915eff]">|</span> MERN{" "}
              <span className="text-[#915eff]">|</span> Unity
            </span>
          </p>
        </Link>
        </div>

        <div>
          <a href="./Franklin_Tejada_Developer_Resume.pdf">
          <button className=" ">
          <span className='game-controller bg-[#915eff01] text-white font-bold rounded-full'><span className="text-[18px]">  &darr; CV  </span> </span> 
          </button>
          </a>
        </div>


        <div className="flex items-center gap-4">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex- flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-obtain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
           </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <div className={`sm:hidden ${toggle ? "flex" : "hidden"} flex-col items-end gap-4`}>
            {/* segundo ul */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            </div>
            {/* segundo ul */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
