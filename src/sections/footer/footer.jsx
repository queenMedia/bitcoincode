import "./footer.css";
import "./footer.responsive.css";

import { footerItems } from "../../assets/utils/utils.footer.menu.js"
import logo from "../../../src/assets/bitcoin360ai/7222d243862daf533fdbbeabaeb8f8f9.png"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <ul className="footer-menu">
                {footerItems?.map((item, index) => (
                    <li className="footer-item" key={index}>
                        <a href="/">{item.value}</a>
                    </li>
                ))}
            </ul>
            <div className="footer-logo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </div>
    </footer>
  );
};