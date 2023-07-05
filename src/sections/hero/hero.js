import { Form } from "../../components/form/form";
import "./hero.css";
import "./hero.responsive.css";
import { useTranslation } from 'react-i18next';

export const Hero = (props) => {
  const { t } = useTranslation();
  
  return (
    <section className="hero">
      <div className="hero_container">
        <article className="hero_container_article">
          <h1 className="hero_container_article_title">{t('hero.title')}</h1>
            <p className="hero_container_article_paragraph">
            {t('hero.paragraph')}
            </p>
            <p className="hero_container_article_link">{t('hero.link.link_one')} <a className="hero_article_link_href" onClick={()=> props.openModal()}>{t('hero.link.link_two')}</a></p>
        </article>
        <Form warning />
      </div>
    </section>
  );
};
