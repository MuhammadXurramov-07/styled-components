import { styled } from "styled-components";

export const Serviss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00bafc;
  padding: 4rem;
  text-align: center;

  @media (max-width: 550px) {
    padding: 2rem;
  }
`;
export const Servis_2_h1 = styled.h1`
  color: #fff;
  font-size: 2.6rem;
  font-weight: normal;
`;
export const Servis_2_p = styled.p`
  padding: 0.5rem;
  line-height: 2rem;
  color: #fff;
  width: 60%;
`;
export const Form = styled.form`
  width: 50%;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 0.6rem;
  background-color: #fff;
  text-align: center;

  @media (max-width: 550px) {
    width: 100% !important;
    padding: 1.5rem;
  }
`;
export const Input = styled.input`
  margin: 0.8rem auto;
  border: none;
  outline: none;
  width: 100%;
  background-color: #f3f3f3;
  padding: 1rem;
  font-size: 1rem;
`;
export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000ac;
  display: none;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  position: relative;
  padding: 3rem;
  border-radius: 1rem;
  background-color: #fff;
`;
export const ModalBtn = styled.button`
  background-color: #000000ac;
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.1rem 0.3rem;
  border-radius: 8px;
`;
