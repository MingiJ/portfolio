import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to={"/"}>
        <img
          src={logo}
          alt="Website Logo"
          className="w-40 h-20 object-contain"
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
