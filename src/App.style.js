import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: #00bafc;
  border: none;
  border-radius: 8px;
  color: #fff;
  transition: 0.5s;
  font-size: 1rem;
  width: auto;

  &:hover {
    box-shadow: -5px 5px 10px #00000095;
  }
`;
