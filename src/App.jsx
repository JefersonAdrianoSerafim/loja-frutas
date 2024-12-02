import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menus from "./components/Menus";

const App = () => {
  return(
    <>
      <main className="overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <Menus/>
      </main>
    </>
  );
};

export default App;