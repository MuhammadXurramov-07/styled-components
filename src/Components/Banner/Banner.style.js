import styled from "styled-components";

export const Bannner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  padding-top: 8rem;
  gap: 0 2rem;

  @media (max-width: 1180px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem 0;
  }
`;
export const Banner_text = styled.div`
  width: 45%;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;
export const Banner_Text_P = styled.div`
  margin: 2rem 0;
  line-height: 1.5rem;
  opacity: 0.9;
`;
export const Banner_img = styled.div`
  background-color: #0000000e;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;
export const Iframe = styled.iframe`
  @media (max-width: 720px) {
    width: auto;
    height: auto;
  }
`;
