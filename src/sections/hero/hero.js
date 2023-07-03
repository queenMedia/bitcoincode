import { Form } from "../../components/form/form";
import "./hero.css";
import "./hero.responsive.css";
import video from "../../../src/assets/videos/banner.mp4";
export const Hero = (props) => {
  return (
    <section className="hero">
      <div className="content-container">
        <div className="hero-text">
          <h1>Invierta en Bitcoin</h1>
          <p>
            Los expertos predicen que Bitcoin alcanzará los $ 318,000 * para fin
            de año. Invierta ahora con Bitcoin 360AI y aproveche.
          </p>
          <div>*Fuente: forbes.com</div>
        </div>
        <Form />
      </div>
    </section>
  );
};
