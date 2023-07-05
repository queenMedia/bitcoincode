import "./platform.css";
import "./platform.responsive.css";
import Phone from "../../assets/bitcoin360ai/invest/img/phone.png";
import Desktop from "../../assets/bitcoin360ai/invest/img/desktop.png";

export const Platform = (props) => {
  return (
    <section className="platform">
      <div className="platform_container">
        <article className="platform_article">
          <h1 className="platform_article_title">
            Potente plataforma de
            negociación intuitiva
          </h1>
          <p className="platform_article_paragraph">
            Obtenga acceso a nuestra innovadora plataforma comercial. Experimente su diseño fluido y fácil de usar. Disponible tanto desde una computadora de escritorio como desde un dispositivo móvil para una experiencia comercial completa.
          </p>
          <ul className="platform_article_list">
            <li className="platform_article_list_item">
              Web Trader
            </li>
            <li className="platform_article_list_item">
              Meta Trader 4 (MT4)
            </li>
            <li className="platform_article_list_item">
              Web móvil a medida
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
