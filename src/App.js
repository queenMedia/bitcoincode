import './App.css';
import { Header } from "./components/header/header.js";
import { Hero } from "./sections/hero/hero.js";
import { Protect } from "./sections/protect/protect.js";
import { Register } from "./sections/register/register.js";
import { Cards } from "./sections/cards/cards.js";
import { Works } from "./sections/works/works.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Protect />
      <Register />
      <Cards />
      <Works />
    </div>
  );
}

export default App;
