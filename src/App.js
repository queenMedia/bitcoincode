import './App.css';
import { Actions } from "./sections/actions/actions"
import { Faqs } from './sections/faq/faqs';
import { Footer } from "../src/sections/footer/footer"
function App() {
  return (
    <div className="App">
      <Actions text="Abra una cuenta gratuita" isUppercase />
      <Faqs />
      <Actions text="Comience a operar" />
      <Footer />
    </div>
  );
}

export default App;
