import "./currency.css";
import "./currency.responsive.css";

import C415 from "../../assets/bitcoin360ai/invest/icons/currency_415.png";
import C416 from "../../assets/bitcoin360ai/invest/icons/currency_416.png";
import C417 from "../../assets/bitcoin360ai/invest/icons/currency_417.png";
import C418 from "../../assets/bitcoin360ai/invest/icons/currency_418.png";
import C419 from "../../assets/bitcoin360ai/invest/icons/currency_419.png";
import C421 from "../../assets/bitcoin360ai/invest/icons/currency_421.png";
import C422 from "../../assets/bitcoin360ai/invest/icons/currency_422.png";
import C423 from "../../assets/bitcoin360ai/invest/icons/currency_423.png";
import C424 from "../../assets/bitcoin360ai/invest/icons/currency_424.png";
import C425 from "../../assets/bitcoin360ai/invest/icons/currency_425.png";
import C426 from "../../assets/bitcoin360ai/invest/icons/currency_426.png";
import C427 from "../../assets/bitcoin360ai/invest/icons/currency_427.png";
import C428 from "../../assets/bitcoin360ai/invest/icons/currency_428.png";
export const Currency = (props) => {
  return (
    <section className="currency">
        <div className="currency_container">
          <h1 className="currency_title">
            Las mejores divisas para operar ahora mismo
          </h1>
          <div className="currency_items">
              <img src={C415} alt="img" className="currency_image" />
              <img src={C416} alt="img" className="currency_image" />
              <img src={C417} alt="img" className="currency_image" />
              <img src={C418} alt="img" className="currency_image" />
              <img src={C419} alt="img" className="currency_image" />
              <img src={C421} alt="img" className="currency_image" />
              <img src={C422} alt="img" className="currency_image" />
              <img src={C423} alt="img" className="currency_image" />
              <img src={C424} alt="img" className="currency_image" />
              <img src={C425} alt="img" className="currency_image" />
              <img src={C426} alt="img" className="currency_image" />
              <img src={C427} alt="img" className="currency_image" />
              <img src={C428} alt="img" className="currency_image" />
              <img src={C422} alt="img" className="currency_image" />
          </div>
          <button className="currency_button">
            Invertir ahora
          </button>
          <div className="currency_footer">
              <a href="#" className="currency_footer_link">
                Website Agreement
              </a>
              <a href="#" className="currency_footer_link">
                Risk Disclaimer
              </a>
              <a href="#" className="currency_footer_link">
                Privacy Policy
              </a>
              <a href="#" className="currency_footer_link">
                Report Abuse
              </a>
              <a href="#" className="currency_footer_link">
                Contact Us
              </a>
          </div>
        </div>
    </section>
  );
};
