import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 5;
  height: min-content;

  h6 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const CheckoutPaymentShoppingCartItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem 2rem 2rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme["base-card"]};

  h2 {
    align-self: center;
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const CoffeeList = styled.section`

`;

export const TotalPrice = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
   
    span {
      color: ${({ theme }) => theme["base-text"]};
      font-size: 0.875rem;
      line-height: 1.3;
    }
    
    strong {
      color: ${({ theme }) => theme["base-subtitle"]};
      font-size: 1.25rem;
    }
  }
`;

export const FinishPayment = styled.button`
  border: 0;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  height: 2.875rem;
  width: 100%;
  
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow};
  
  font-size: 0.875rem;
  line-height: 1.3;
  text-transform: uppercase;

  cursor: pointer;

  &:disabled {
    cursor: auto;
    pointer-events: none;

    background: ${({ theme }) => theme["yellow-light"]};
  }
`;
