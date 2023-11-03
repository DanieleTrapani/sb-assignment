import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const App = () => {
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
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div>
        <div id="form" className="bg-white w-1/2 p-8 h-full">
          <form action="">
            <p className="text-2xl font-bold">Plaats een blog bericht</p>
            <label htmlFor="name" className="flex flex-col">
              <p className="text-xl">Titel</p>
              <input
                className="bg-gray-50"
                type="text"
                id="name"
                name="name"
                placeholder="Geen titel"
              />
            </label>

            <label htmlFor="category" className="flex flex-col">
              <p className="text-xl">Categorie</p>
              <select
                name="category"
                id="category"
                className="bg-gray-50"
                placeholder="Geen categorie"
              >
                <option selected disabled>
                  Geen categorie
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
