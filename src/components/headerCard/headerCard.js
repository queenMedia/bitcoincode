import "./headerCard.css";

export const HeaderCard = (props) => {
  return (
    <h1 className={props.class}>{props.title}</h1>
  );
};
