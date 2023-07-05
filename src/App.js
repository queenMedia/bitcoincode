import { useState } from "react";
import './App.css';
import { Header } from "./components/header/header.js";
import { Hero } from "./sections/hero/hero.js";
import { Invest } from "./sections/invest/invest.js";
import { Platform } from "./sections/platform/platform.js";
import { About } from "./sections/about/about.js";
import { Currency } from "./sections/currency/currency.js";
import { Footer } from "../src/sections/footer/footer"
import { Modal } from "./components/modal/modal.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      {isOpen ?
        <Modal closeModal={closeModal}/> 
        : null}
      <Header openModal={openModal} />
      <Hero openModal={openModal} />
      <Invest openModal={openModal} />
      <Platform openModal={openModal} />
      <About openModal={openModal} />
      <Currency openModal={openModal} />
      <Footer openModal={openModal} />
    </div>
  );
}

export default App;
