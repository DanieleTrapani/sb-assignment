import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);

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
        // Load the first 4 blog posts
        setFiltered(data.data.slice(0, 4));
        console.log(data.data);
      });
    });
  };

  const addFour = () => {
    // check the current length of filtered, set as n
    // add 4 from blogs with index starting at n (length of filtered) and ending at n + 3
    const n = filtered.length;
    // base case if all blogs have been added to preview
    if (n >= blogs.length) {
      return;
    }
    const addition = blogs.slice(n, n + 4);
    setFiltered(filtered.concat(addition));
  };

  useEffect(() => {
    const headers = { token: "pj11daaQRz7zUIH56B9Z" };
    getCategories(headers);
    getBlogs(headers);
  }, []);

  return (
    <Router>
      <div className="flex flex-col gap-8 justify-between h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                categories={categories}
                filtered={filtered}
                addFour={addFour}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
