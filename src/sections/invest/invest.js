import "./invest.css";
import "./invest.responsive.css";
import Cash from "../../assets/bitcoin360ai/invest/icons/cash.png";
import Eth from "../../assets/bitcoin360ai/invest/icons/ethereum.png";
import Coin from "../../assets/bitcoin360ai/invest/icons/coin.png";
import { useTranslation } from 'react-i18next';

import Coin_Chart from "../../assets/bitcoin360ai/invest/img/coin_chart.jpg";
import Cash_Chart from "../../assets/bitcoin360ai/invest/img/cash_chart.jpg";
import Eth_Chart from "../../assets/bitcoin360ai/invest/img/ethereum_chart.jpg";

export const Invest = (props) => {
  const { t } = useTranslation();

  return (
    <section className="invest">
      <h1 className="invest_title">
      {t('invest.title')}
      </h1>
      <article className="invest_container">
        {/* Primera fila */}
        <div className="invest_icon_container">
          <img src={Coin} alt="coin" className="invest_icon" />
          <p className="invest_paragraph"><b>{t('invest.texts.info_one.text_one')}</b>{t('invest.texts.info_one.text_two')}</p>
        </div>
        <div className="invest_container_chart">
          <img src={Coin_Chart} alt="coin" className="invest_chart" />
          <p className="invest_container_chart_paragraph">
            <a href="#" className="invest_container_chart_paragraph_link" onClick={()=> props.openModal()}>
            {t('invest.image_info.image_info_one.text_one')}  {" "}
            </a>
            {t('invest.image_info.image_info_one.text_two')}
          </p>
        </div>
        <button className="invest_button" onClick={()=> props.openModal()}>
          {t('invest.button')}
        </button>
        {/* Segunda fila */}
        <div className="invest_icon_container">
          <img src={Eth} alt="coin" className="invest_icon" />
           <p className="invest_paragraph"><b>{t('invest.texts.info_two.text_one')}</b>{t('invest.texts.info_two.text_two')}</p>
        </div>
        <div className="invest_container_chart">
          <img src={Eth_Chart} alt="coin" className="invest_chart" />
           <p className="invest_container_chart_paragraph">
            <a href="#" className="invest_container_chart_paragraph_link" onClick={()=> props.openModal()}>
            {t('invest.image_info.image_info_two.text_one')}  {" "}
            </a>
            {t('invest.image_info.image_info_two.text_two')}
          </p>
        </div>
        <button className="invest_button" onClick={()=> props.openModal()}>
           {t('invest.button')}
        </button>
        {/* Tercera fila */}
        <div className="invest_icon_container">
          <img src={Cash} alt="coin" className="invest_icon" />
           <p className="invest_paragraph"><b>{t('invest.texts.info_one.text_one')}</b>{t('invest.texts.info_three.text_two')}</p>
        </div>
        <div className="invest_container_chart">
          <img src={Cash_Chart} alt="coin" className="invest_chart" />
           <p className="invest_container_chart_paragraph">
            <a href="#" className="invest_container_chart_paragraph_link" onClick={()=> props.openModal()}>
            {t('invest.image_info.image_info_three.text_one')}  {" "}
            </a>
            {t('invest.image_info.image_info_three.text_two')}
          </p>
        </div>
        <button className="invest_button" onClick={()=> props.openModal()}>
           {t('invest.button')}
        </button>
      </article>
    </section>
  );
};
