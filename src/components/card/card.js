import "./card.css";

export const Card = (props) => {
  return (
    <article className="card">
        <img src={props.image} alt={props.alt}  className="img-icon-card" />
        <p className="title-card" >{props.title}</p>
        <p className="content-card" >{props.content}</p>
    </article>
  );
};
