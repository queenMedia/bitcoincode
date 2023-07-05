import "./about.css";
import "./about.responsive.css";

import Diamond from "../../assets/bitcoin360ai/invest/img/diamond.png";
import Profit from "../../assets/bitcoin360ai/invest/img/profit.png";
import Money from "../../assets/bitcoin360ai/invest/img/money.png";

export const About = (props) => {
  return (
    <section className="about">
      <article className="about_container">
        <h1 className="about_title">
          ¿Por qué invertir en Bitcoin?
        </h1>
        <div className="about_row_container">
          <div className="about_image_container">
            <img src={Diamond} alt="diamond" className="about_image" />
          </div>
          <p className="about_row_paragraph">
            Bitcoin valía $ 100 en 2013. En 2018, alcanzó un valor de $ 20,000. Peter Brandt de Forbes ha afirmado que Bitcoin está en el "nivel de compra" perfecto y esta es una gran razón por la que los inversores institucionales se están acumulando rápidamente.
          </p>
        </div>
        <div className="about_row_container">
          <div className="about_image_container">
            <img src={Profit} alt="diamond" className="about_image" />
          </div>
          <p className="about_row_paragraph">
            Bitcoin aún se encuentra en una etapa temprana y la tecnología blockchain está evolucionando exponencialmente. Comenzar temprano significa que puede ser parte de su crecimiento.
          </p>
        </div>
        <div className="about_row_container">
          <div className="about_image_container">
            <img src={Money} alt="diamond" className="about_image" />
          </div>
          <p className="about_row_paragraph">
            La inversión y el comercio de Bitcoin se pueden realizar en cualquier momento, lo que le brinda la flexibilidad de trabajar con sus inversiones sin obstáculos.
          </p>
        </div>
        <span className="link">Fuente, forbes.com</span>
      </article>
    </section>
  );
};
