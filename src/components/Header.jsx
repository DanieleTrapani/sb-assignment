import SBLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-38 px-24 py-8">
      <div className="flex justify-between items-center">
        <img src={SBLogo} alt="Social Brothers Logo" className="w-72" />
        <div className="flex gap-7">
          <Link to="/">
            <h2 className="text-xl text-white">Home</h2>
          </Link>
          <Link to="/blogs">
            <h2 className="text-xl text-white">Blog</h2>
          </Link>
        </div>
      </div>
      <p className="text-white text-5xl text-center my-4">Blog</p>
    </header>
  );
};

export default Header;
