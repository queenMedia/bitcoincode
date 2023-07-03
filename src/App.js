import './App.css';
import { Header } from "./components/header/header.js";
import { Hero } from "./sections/hero/hero.js";
import { Protect } from "./sections/protect/protect.js";
import { Register } from "./sections/register/register.js";
import { Cards } from "./sections/cards/cards.js";
import { Works } from "./sections/works/works.js";
import { Actions } from "./sections/actions/actions"
import { Faqs } from './sections/faq/faqs';
import { Footer } from "../src/sections/footer/footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Protect />
      <Register />
      <Cards />
      <Works />
      <Actions text="Abra una cuenta gratuita" isUppercase />
      <Faqs />
      <Actions text="Comience a operar" />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
