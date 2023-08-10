import { useState } from "react";
import { X } from "../../img/Icon1";
import { Form, Input, Modal, ModalBtn, ModalWrapper, Servis_2_h1, Servis_2_p, Serviss } from "./Servis.style";
import { Button } from "../../App.style";

let modall = document.querySelector(".modal__wrapper");


export function Servis() {
  let [madal, setMadal] = useState(false);

  function modalo(e) {
    e.preventDefault();
    setMadal(!madal);
  }
  function modalClose() {
    setMadal(false);
  }

  window.addEventListener('click', (e) => {
      if(e.target == modall) {
          if(e.target == modall) {
            setMadal(false)
          }
      }
  })

  return (
    <>
      <Serviss id="contact">
        <Servis_2_h1>Buyurtma berish</Servis_2_h1>
        <Servis_2_p>
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </Servis_2_p>
        <Form>
          <Input type="text" placeholder="Ismingiz" />
          <Input type="text" placeholder="Telefon raqamingiz" />
          <Input type="text" placeholder="Xizmat turingiz" />
          <Button onClick={modalo}>Buyurtma berish</Button>
        </Form>
      </Serviss>

      <ModalWrapper className={madal ? "modal__wrapper active" : "modal__wrapper"}>
        <Modal>
          <ModalBtn onClick={modalClose}>
            <X />
          </ModalBtn>
          <img src="https://picsum.photos/600/350" alt="" />
        </Modal>
      </ModalWrapper>
    </>
  );
}
