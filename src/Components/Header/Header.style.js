import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 1rem 0;
  background-color: #fff;
  box-shadow: 15px 15px 20px #0000000e;
`;
export const Nav_content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 2rem;

  @media (max-width: 998px) {
    display: none;
  }
  @media (max-width: 1215px) {
    gap: .5rem;
  }
`;
export const Aaa = styled.a`
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  transition: 0.5s;
  color: #000;

  @media (max-width: 1215px) {
    padding: .5rem;
  }

  &:hover {
    box-shadow: -3px 3px 10px #00000035;
  }
  &:active {
    color: #00BAFC;
  }
`;
export const Listt = styled.div`
  display: none;
  position: relative;
  z-index: 11;

  @media (max-width: 998px) {
    display: block;
  }
`;
export const Xa = styled.div`
  display: none;
  position: absolute;
  right: 3rem;
  top: 3rem;

  @media (max-width: 998px) {
    display: block;
  }
`;
