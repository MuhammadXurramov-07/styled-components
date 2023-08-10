import "./Cards.css";

export function Cards(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="" />
        <h1> {props.title} </h1>
        <p> {props.text} </p>
      </div>
    </>
  );
}
