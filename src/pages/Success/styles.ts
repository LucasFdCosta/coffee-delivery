import { styled } from "styled-components";

export const CheckoutSuccessContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 6.25rem;
  padding: 2rem 10rem;
  align-items: center;
  
  div {
    display: flex;
    flex: 1;
    flex-direction: column;

    span {
      font-size: 1.25rem;
      color: ${({ theme }) => theme["base-subtitle"]};
      line-height: 130%;
    }
  }
  
  h1 {
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme.yellow};
  }
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;

  padding: 2.5rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(90deg, ${({ theme }) => theme.yellow}, ${({ theme }) => theme.purple}) border-box;
  border-radius: 6px 36px 6px 36px;

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`;
