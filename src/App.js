import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Gallery from "./Page/HomePage/Gallary/Gallery";
import HomePage from "./Page/HomePage/HomePage";
import Service from "./Page/HomePage/Service/Service";

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Gallery />
      <Service />
    </div>
  );
}

export default App;
