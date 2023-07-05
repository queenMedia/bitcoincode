import "./platform.css";
import "./platform.responsive.css";
import Phone from "../../assets/bitcoin360ai/invest/img/phone.png";
import Desktop from "../../assets/bitcoin360ai/invest/img/desktop.png";

import { useTranslation } from 'react-i18next';

export const Platform = (props) => {
  const { t } = useTranslation();
  return (
    <section className="platform">
      <div className="platform_container">
        <article className="platform_article">
          <h1 className="platform_article_title">
          {t('platform.title')}
          </h1>
          <p className="platform_article_paragraph">
          {t('platform.paragraph')}
          </p>
          <ul className="platform_article_list">
            <li className="platform_article_list_item">
            {t('platform.list.item_one')}
            </li>
            <li className="platform_article_list_item">
            {t('platform.list.item_two')}
            </li>
            <li className="platform_article_list_item">
            {t('platform.list.item_three')}
            </li>
          </ul>
          <img src={Desktop} alt="computer" className="platform_article_image" />
        </article>
        <div className="platform_image_container">
          <img src={Phone} alt="phone" className="platform_image" />
        </div>
      </div>
    </section>
  );
};
