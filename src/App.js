import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/index";
import Login from "./Pages/Login/Login";
import { UserStorage } from "./UserContext";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
