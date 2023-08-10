import { styled } from "styled-components";

export const Footter = styled.div`
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 4rem;

  @media (max-width: 1000px) {
    padding: 2.5rem;
  }
`;
export const Footer_class = styled.div`
  width: 70%;
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
`;
export const Footer_h2 = styled.h2`
  font-size: 1.5rem;
`;
export const Footer_p = styled.p`
  margin: 0.5rem 0;
  line-height: 2rem;
  width: 70%;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const F_1 = styled.div`
  width: 60%;

  @media (max-width: 1000px) {
    width: 90% !important;
    margin: 0 auto;
  }
`;
export const F_2 = styled.div`
  width: 20%;
  margin-right: 3rem;

  @media (max-width: 1000px) {
    width: 90% !important;
    margin: 0 auto;
  }
`;
export const F_3 = styled.div`
  width: 20%;

  @media (max-width: 1000px) {
    width: 90% !important;
    margin: 0 auto;
  }
`;
export const F_li = styled.li`
  list-style-type: none;
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 1000px) {
    text-align: center !important;
  }
`;
