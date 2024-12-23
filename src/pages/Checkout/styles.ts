import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.main`
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 2rem 10rem;
`;

export const CheckoutPaymentFormContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CheckoutPaymentForm = styled.div`
  display: flex;
  flex: 6;
  flex-direction: column;
  gap: 0.5rem;

  h6 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    background: ${({ theme }) => theme["base-card"]};
    border-radius: 6px;
  }
`;

export const CheckoutCardHeader = styled.div`
  display: flex;
  gap: 0.5rem;  

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
  
  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const FormInputsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface InputProps {
  containerWidth?: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-grow: ${({ containerWidth }) => (containerWidth ? "0" : "1")};
  
  width: ${({ containerWidth }) => containerWidth ?? "auto"};
  min-width: ${({ containerWidth }) => (containerWidth ? undefined : "0")};
  
  padding: 0.75rem;
  
  background: ${({ theme }) => theme["base-input"]};
  
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  
  input {
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.3;
    width: 100%;
    
    &::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }
  
  span {
    font-style: italic;
    font-size: 0.75rem;
    color: ${({ theme }) => theme["base-label"]};
    line-height: 1.3;
  }
`;

export const PaymentMethodContainer = styled(RadioGroup.Root)`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: space-between;
`;

interface PaymentMethodOptionProps {
  variant: "credit-card" | "debit-card" | "money";
}

export const PaymentMethodOption = styled(
  RadioGroup.Item
)<PaymentMethodOptionProps>`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  width: auto;
  border: 0;
  
  border-radius: 6px;
  
  background: ${({ theme }) => theme["base-button"]};
  
  span {
    font-size: 0.75rem;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme["base-text"]};
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${({ theme }) => theme["base-hover"]};
    cursor: pointer;
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme["purple-light"]};

    border: 1px solid ${({ theme }) => theme.purple};
    
    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const CheckoutShoppingCartItems = styled.div`
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

export const ConfirmPayment = styled.button`
  border: 0;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  height: 2.875rem;
  
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

export const CheckoutPaymentShoppingCartItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem 2rem 2rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme["base-card"]};
`;

export const CoffeeList = styled.section`

`;

export const CoffeeItem = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 2rem 0;
  border-bottom: solid 1px ${({ theme }) => theme["base-button"]};
  
  img {
    width: 4rem;
    height: 4rem;
  }

  section {
    display: flex;
    column-gap: 0.5rem;
    flex-wrap: wrap;

    p {
      width: 100%;
      height: min-content;
      font-size: 1rem;
      line-height: 1.3;
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    div {
      display: flex;
      width: min-content;
      height: 2rem;
      align-items: center;
      align-self: flex-end;
      gap: 0.5rem;
      padding: 0.625rem;
      background: ${({ theme }) => theme["base-button"]};
      border-radius: 6px;
      
      button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        border: 0;
        color: ${({ theme }) => theme.purple};
        background: transparent;
        
        cursor: pointer;
        
        &:disabled {
          color: ${({ theme }) => theme.purple};
          pointer-events: none;
          cursor: auto;
        }

        &:not(:disabled):hover {
          transition: color 0.25s;
          color: ${({ theme }) => theme["purple-dark"]};
        }
      }
      
      p {
        text-transform: uppercase;

        color: ${({ theme }) => theme["base-text"]};
        font-size: 0.75rem;
      }

      svg {
        display: flex;
        align-items: center;
      }

      strong {
        width: auto;
      }
    }
  }
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
