import "./register.css";
import woman from "../../assets/images/women-one.png"

export const Register = (props) => {
  return (
   <section className="register">
    <article className="article">
        <h1 className="article-title">
            Regístrese para empezar con su portafolio de trading<br/>
            <span className="title-offer">con Bitcoin Code!</span>
        </h1>
        <p className="article-content">
            El sistema Bitcoin Code fue supuestamente desarrollado como una solución algorítmica para los
            traders de alto volumen que buscan una manera de gestionar sus operaciones a través de una variedad 
            de activos. La idea aquí era crear un sistema avanzado que permitiera a la gente hacer menos "trabajo",
            pero obtener altos beneficios en el mercado. Cientos de usuarios han declarado altos rendimientos con este producto.
        </p>
    </article>
    {/* <img src={woman} alt="woman coin" className="woman-image" /> */}
   </section>
  );
};
