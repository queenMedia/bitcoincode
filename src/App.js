import './App.css';
import { Actions } from "./sections/actions/actions"

function App() {
  return (
    <div className="App">
      <Actions text="Abra una cuenta gratuita" isUppercase />
      <Actions text="Comience a operar" />
    </div>
  );
}

export default App;
