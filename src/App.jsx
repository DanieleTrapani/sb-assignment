import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const getCategories = async (headers) => {
    fetch("https://frontend-case-api.sbdev.nl/api/categories", {
      headers,
    }).then((response) => {
      response.json().then((data) => {
        setCategories(data);
      });
    });
  };

  const getBlogs = async (headers) => {
    fetch("https://frontend-case-api.sbdev.nl/api/posts", {
      headers,
    }).then((response) => {
      response.json().then((data) => {
        setBlogs(data.data);
        console.log(data.data);
      });
    });
  };

  useEffect(() => {
    const headers = { token: "pj11daaQRz7zUIH56B9Z" };
    getCategories(headers);
    getBlogs(headers);
  }, []);

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
