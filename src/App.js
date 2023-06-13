import './App.css';
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
    </div>
  );
}

export default App;
