import "./about.css";
import "./about.responsive.css";

import Diamond from "../../assets/bitcoin360ai/invest/img/diamond.png";
import Profit from "../../assets/bitcoin360ai/invest/img/profit.png";
import Money from "../../assets/bitcoin360ai/invest/img/money.png";

import { useTranslation } from 'react-i18next';
export const About = (props) => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <article className="about_container">
        <h1 className="about_title">
        {t('about.title')}
        </h1>
        <div className="about_row_container">
          <div className="about_image_container">
            <img src={Diamond} alt="diamond" className="about_image" />
          </div>
          <p className="about_row_paragraph">
            {t('about.paragraph.paragraph_one')}
          </p>
        </div>
        <div className="about_row_container">
          <div className="about_image_container">
            <img src={Profit} alt="diamond" className="about_image" />
          </div>
          <p className="about_row_paragraph">
            {t('about.paragraph.paragraph_two')}
          </p>
        </div>
        <div className="about_row_container">
          <div className="about_image_container">
            <img src={Money} alt="diamond" className="about_image" />
          </div>
          <p className="about_row_paragraph">
            {t('about.paragraph.paragraph_three')}
          </p>
        </div>
        <p className="hero_container_article_link"> {t('about.source.source_one')}<a className="hero_article_link_href" onClick={()=> props.openModal()}> {t('about.source.source_two')}</a></p>
      </article>
    </section>
  );
};
