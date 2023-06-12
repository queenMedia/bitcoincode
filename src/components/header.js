import "./header.css";
import logo from "../../src/assets/images/logo.png";
export const Header = (props) => {
  return (
    <header className="header">
        <img src={logo} alt="logo" />
    </header>
  );
};
