import { Icon1, List, X } from "../../img/Icon1";
import { Aaa, Menu, Nav, Nav_content, Xa, Listt } from "./Header.style";
import { Button, Container } from "../../App.style";

export function Header() {
  function list() {
    let menu = document.querySelector(".menu");
    menu.classList.add("new_menu");
  }
  function close() {
    let menu = document.querySelector(".menu");
    menu.classList.remove("new_menu");
  }
  return (
    <>
      <Nav>
        <Container>
          <Nav_content>
            <Icon1 />
            <Menu className="menu">
              <Xa onClick={close}>
                <X />
              </Xa>
              <Aaa href="#home">Bosh sahifa</Aaa>
              <Aaa href="#about">Xizmatlar</Aaa>
              <Aaa href="#portfolio">Portfolio</Aaa>
              <Aaa href="#jamoa">Jamoa</Aaa>
              <Aaa href="#blog">Blog</Aaa>
              <Aaa href="#contact">Kontaktlar</Aaa>
              <Button>+998 90 921 37 11</Button>
            </Menu>
            <Listt onClick={list}>
              <List />
            </Listt>
          </Nav_content>
        </Container>
      </Nav>
    </>
  );
}
