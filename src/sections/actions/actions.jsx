import "./actions.responsive.css";
import "./actions.css";

export const Actions = ({text, isUppercase}) => {
  const uperCase = isUppercase ? "button button-uppercase" : "button";
  return (
    <section className="actions-section">
      <div className={uperCase}>
        <a href="/">{text}</a>
      </div>
    </section>
  );
};
