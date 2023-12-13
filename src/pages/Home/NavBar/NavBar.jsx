import Button from "../../../components/Button/Button";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const navItems = (
    <>
      <li className="mr-4 text-lg">
        <a
          href="https://www.linkedin.com/in/faraazhossainimran"
          target="_blank"
        >
          Linkedin
        </a>
      </li>
      <li className="mr-4 text-lg">
        <a href="https://github.com/faraazhossainimran" target="_blank">
          Github
        </a>
      </li>
      <li className="mr-4 text-lg">
        <a href=" https://twitter.com/Ho34059710Imran" target="_blank">
          Twitter
        </a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar text-white py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* https://i.ibb.co/nLqtGwf/i.png */}
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://i.ibb.co/nLqtGwf/i.png" />
            </div>
          </div>
          {/* <a className="btn btn-ghost text-2xl">Ims</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70} // Adjust the offset as needed
          >
            <button>
              <Button label={"Contact"} />
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
