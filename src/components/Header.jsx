import SBLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="h-38 px-[10rem] py-8">
      <div className="flex justify-between items-center">
        <img src={SBLogo} alt="Social Brothers Logo" className="w-64" />
        <div className="flex gap-7">
          <Link to="/">
            <h2
              className={
                "text-xl text-white py-1" +
                (pathname === "/" ? " selected" : "")
              }
            >
              Home
            </h2>
          </Link>
          <Link to="/blogs">
            <h2
              className={
                "text-xl text-white py-1" +
                (pathname === "/blogs" ? " selected" : "")
              }
            >
              Blog
            </h2>
          </Link>
        </div>
      </div>
      <p
        className={
          `text-white text-5xl text-center my-4 path-title font-bold` +
          (pathname === "/" ? " invisible" : "")
        }
      >
        Blog
      </p>
    </header>
  );
};

export default Header;
