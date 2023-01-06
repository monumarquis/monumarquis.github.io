import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer font-semibold"
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={300}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li  className="text-white hover:text-accent cursor-pointer font-semibold" >
        <a href="https://drive.google.com/file/d/18Pxv_xnL2onLThvIK8ofNl5vKKuN1DND/view" target="_blank">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
