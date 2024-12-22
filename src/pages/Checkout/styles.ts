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

export const CheckoutShoppingCartItems = styled.div`
  border: 1px solid red;
  flex: 5;
  height: 50vh;

  h6 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
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
