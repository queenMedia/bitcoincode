import "./App.css";
import { Header } from "./components/header/header.js";
import { Hero } from "./sections/hero/hero.js";
import { Invest } from "./sections/invest/invest.js";
import { Platform } from "./sections/platform/platform.js";
import { About } from "./sections/about/about.js";
import { Works } from "./sections/works/works.js";
import { Actions } from "./sections/actions/actions";
import { Faqs } from "./sections/faq/faqs";
import { Footer } from "../src/sections/footer/footer";
import { CarouselSec } from "../src/sections/carousel/carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Invest />
      <Platform />
      <About />
      <CarouselSec />
    </div>
  );
}

export default App;
