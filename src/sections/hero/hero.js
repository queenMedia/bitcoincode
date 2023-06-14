import { Form } from "../../components/form/form";
import "./hero.css";
import "./hero.responsive.css";
import video from "../../../src/assets/videos/banner.mp4";
export const Hero = (props) => {
  return (
   <section className="hero">
      <h1 className="title">
       El Bitcoin está haciendo a muchas personas ricas
      </h1>
      <h3 className="subtitle">
      Y tú puedes convertirte en el <span className="yellow-text">próximo millonario...</span>
      </h3>
      <div className="content-container">
        <video controlsList="nodownload" preload="auto" className="video" controls loop>
          <source src="https://bravoseguro.com/img/banner-6eb9e040b37cdcb23098c5d7b0b0e92d.mp4" type="video/mp4"/>
          Tu navegador no admite la etiqueta de video.
        </video>
        <Form />
      </div>
</section>
  );
};
