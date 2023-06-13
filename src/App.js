import './App.css';
import { Actions } from "./sections/actions/actions"
import { Faqs } from './sections/faq/faqs';
import { Footer } from "../src/sections/footer/footer"
import { Header } from "./components/header/header.js"
import { Hero } from "./sections/hero/hero.js"
import { Protect } from "./sections/protect/protect.js"
import { Register } from "./sections/register/register.js"
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Protect />
      <Register />
      <Actions text="Abra una cuenta gratuita" isUppercase />
      <Faqs />
      <Actions text="Comience a operar" />
      <Footer />
    </div>
  );
}

export default App;
