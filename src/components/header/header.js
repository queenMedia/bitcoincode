import "./header.css";
import "./header.responsive.css";
import logo from "../../../src/assets/bitcoin360ai/7222d243862daf533fdbbeabaeb8f8f9.png";
export const Header = (props) => {
  return (
    <header className="header">
      <div className="header_container">
        <img src={logo} alt="logo" className="header_image" />
        <button className="header_button">Registrarse</button>
      </div>
    </header>
  );
};
