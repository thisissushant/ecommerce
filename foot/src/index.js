import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NewNav from "./Components/NewNav";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NewNav />
    <HeroSection />
    <Shop />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
