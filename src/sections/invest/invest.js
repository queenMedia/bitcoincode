import "./invest.css";
import "./invest.responsive.css";
import Cash from "../../assets/bitcoin360ai/invest/icons/cash.png";
import Eth from "../../assets/bitcoin360ai/invest/icons/ethereum.png";
import Coin from "../../assets/bitcoin360ai/invest/icons/coin.png";

import Coin_Chart from "../../assets/bitcoin360ai/invest/img/coin_chart.jpg";
import Cash_Chart from "../../assets/bitcoin360ai/invest/img/cash_chart.jpg";
import Eth_Chart from "../../assets/bitcoin360ai/invest/img/ethereum_chart.jpg";

export const Invest = (props) => {
  return (
    <section className="invest">
      <h1 className="invest_title">
        Descubra las mejores criptomonedas para invertir hoy
      </h1>
      <article className="invest_container">
        <div className="invest_icon_container">
          <img src={Coin} alt="coin" className="invest_icon" />
          <p className="invest_paragraph"><b>BTC</b>-Bitcoin</p>
        </div>
        <div className="invest_container_chart">
          <img src={Coin_Chart} alt="coin" className="invest_chart" />
          <p className="invest_container_chart_paragraph">
            <a href="#" className="invest_container_chart_paragraph_link">
              BTCUSD Rates  {" "}
            </a>
            by TradingView
          </p>
        </div>
        <button className="invest_button">
          Invertir ahora
        </button>
        <div className="invest_icon_container">
          <img src={Eth} alt="coin" className="invest_icon" />
          <p className="invest_paragraph"><b>BTC</b>-Bitcoin</p>
        </div>
        <div className="invest_container_chart">
          <img src={Cash_Chart} alt="coin" className="invest_chart" />
          <p className="invest_container_chart_paragraph">
            <a href="#" className="invest_container_chart_paragraph_link">
              ETHUSD Rates {" "}
            </a>
            by TradingView
          </p>
        </div>
        <button className="invest_button">
          Invertir ahora
        </button>
        <div className="invest_icon_container">
          <img src={Cash} alt="coin" className="invest_icon" />
          <p className="invest_paragraph"><b>BTC</b>-Bitcoin</p>
        </div>
        <div className="invest_container_chart">
          <img src={Cash_Chart} alt="coin" className="invest_chart" />
          <p className="invest_container_chart_paragraph">
            <a href="#" className="invest_container_chart_paragraph_link">
              BCHUSD Rates {" "}
            </a>
            by TradingView
          </p>
        </div>
        <button className="invest_button">
          Invertir ahora
        </button>
      </article>
    </section>
  );
};
