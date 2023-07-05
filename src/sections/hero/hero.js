import { Form } from "../../components/form/form";
import "./hero.css";
import "./hero.responsive.css";

export const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero_container">
        <article className="hero_container_article">
          <h1 className="hero_container_article_title">Invierta en Bitcoin</h1>
            <p className="hero_container_article_paragraph">
              Los expertos predicen que Bitcoin alcanzará los $ 318,000 * para fin
              de año. Invierta ahora con Bitcoin 360AI y aproveche.
            </p>
            <p className="hero_container_article_link">*Fuente: <a className="hero_article_link_href" onClick={()=> props.openModal()}>forbes.com</a></p>
        </article>
        <Form warning />
      </div>
    </section>
  );
};
