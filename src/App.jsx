import "./App.css";
import SBLogo from "./assets/logo.svg";
import { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState([]);

  const getCategories = async (headers) => {
    fetch("https://frontend-case-api.sbdev.nl/api/categories", {
      headers,
    }).then((response) => {
      response.json().then((data) => {
        setCategories(data);
      });
    });
  };

  useEffect(() => {
    const headers = { token: "pj11daaQRz7zUIH56B9Z" };
    getCategories(headers);
  }, []);

  return (
    <>
      <header>
        <img src={SBLogo} alt="Social Brothers Logo" />
      </header>
      <p>Hello world</p>
      {categories.length > 0 && <p>{categories.length}</p>}
    </>
  );
}

export default App;
