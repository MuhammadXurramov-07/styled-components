import { Button, Container } from "../../App.style";
import { Banner_Text_P, Banner_img, Banner_text, Bannner, Iframe } from "./Banner.style";

export function Banner() {
  return (
    <>
      <Container>
        <Bannner id="home">
          <Banner_text>
            <h1>Biznesingizni keyingi bosqichga olib chiqing</h1>
            <Banner_Text_P>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar
            </Banner_Text_P>
            <Button>Xizmatlar bilan tanishish</Button>
          </Banner_text>
          <Banner_img>
            <Iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xcGtfYUfDLo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Iframe>
          </Banner_img>
        </Bannner>
      </Container>
    </>
  );
}
