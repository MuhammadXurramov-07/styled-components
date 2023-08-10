import { Section_3_p } from "../SectionCards.style";
import "./SectionComponent.css";

export function SectionComponent(props) {
  return (
    <>
      <div className="container">
        <div className="Card">
          <img src={props.img} alt="" />
          <div className="main">
            <h1> {props.title} </h1>
            <Section_3_p> {props.text} </Section_3_p>
          </div>
        </div>
      </div>
    </>
  );
}

export function SectionComponent2(props) {
  return (
    <>
      <div className="container">
        <div className="Card card__2">
          <div className="main">
            <h1> {props.title} </h1>
            <Section_3_p> {props.text} </Section_3_p>
          </div>
          <img src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}
