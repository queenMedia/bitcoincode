import "./cardWorks.css";

export const CardWorks = (props) => {
  return (
    <article className="card-works">
        {props.header}
        <img src={props.image} alt={props.alt}  className="img-icon-card-works" />
        <p className="title-card-works" >{props.title}</p>
        <p className="content-card-works" >{props.content}</p>
    </article>
  );
};
