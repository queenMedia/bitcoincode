import "./register.css";
import "./register.responsive.css";
import c1 from "../../assets/bitcoin360ai/frame1.png";
import c2 from "../../assets/bitcoin360ai/eth_chart.jpg";
import c3 from "../../assets/bitcoin360ai/bch_chart.jpg";

export const Register = (props) => {
  return (
    <section className="register">
      <article className="article">
        <h1 className="article-title">
          Descubra las mejores criptomonedas para invertir hoy
        </h1>
        <img src={c1} />
      </article>
    </section>
  );
};
