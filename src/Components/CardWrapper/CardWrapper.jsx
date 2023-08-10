import { Cards } from "./Cards/Cards";
import Img1 from "../../img/Img1.svg";
import Img2 from "../../img/Img2.svg";
import Img3 from "../../img/Img3.svg";
import Img4 from "../../img/Img4.svg";
import Img5 from "../../img/Img5.svg";
import { Section_2, Section_2_a, Section_2_card_wrapper, Section_2_h1_class, Section_2_p } from "./CardWrapper.style";
import { Button, Container } from "../../App.style";

export function CardWrapper() {
  return (
    <>
      <Section_2 id="about">
        <Container>
          <Section_2_h1_class>Xizmatlar</Section_2_h1_class>
          <Section_2_p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </Section_2_p>
          <Section_2_card_wrapper>
            <Cards img={Img1} title="Vebsayt tuzish" text="lorem ipsum" />
            <Cards img={Img2} title="Telegram bot" text="lorem ipsum" />
            <Cards img={Img3} title="SMM" text="lorem ipsum" />
            <Cards img={Img4} title="Grafik dizayn" text="lorem ipsum" />
            <Cards img={Img5} title="CRM tizimlar" text="lorem ipsum" />
          </Section_2_card_wrapper>
          <div>
            <Button>Buyurtma berish</Button>
            <Section_2_a href="">Xizmatlar sahifasiga o’tish</Section_2_a>
          </div>
        </Container>
      </Section_2>
    </>
  );
}
