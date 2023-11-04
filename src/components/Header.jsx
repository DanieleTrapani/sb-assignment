import SBLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState(0);
  const changeSelected = (event) => {
    if (event.target.classList.contains("selected")) {
      return;
    }
    const selected = document.querySelector(".selected");
    const unselected = document.querySelector(".unselected");
    const pathTitle = document.querySelector(".path-title");
    selected.classList.remove("selected");
    selected.classList.add("unselected");
    unselected.classList.remove("unselected");
    unselected.classList.add("selected");
    console.log(window.location.pathname);
    const pathname = window.location.pathname;
    if (pathname === "/blogs") {
      pathTitle.classList.add("invisible");
    } else {
      pathTitle.classList.remove("invisible");
    }
    setSelected(selected);
  };

  return (
    <header className="h-38 px-[10rem] py-8">
      <div className="flex justify-between items-center">
        <img src={SBLogo} alt="Social Brothers Logo" className="w-64" />
        <div className="flex gap-7">
          <Link to="/" onClick={changeSelected}>
            <h2 className="text-xl text-white py-1 selected">Home</h2>
          </Link>
          <Link to="/blogs" onClick={changeSelected}>
            <h2 className="text-xl text-white py-1 unselected">Blog</h2>
          </Link>
        </div>
      </div>
      <p className="text-white text-5xl text-center my-4 path-title invisible font-bold">
        Blog
      </p>
    </header>
  );
};

export default Header;
