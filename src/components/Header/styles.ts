import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.background};
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`;

export const ShoppingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["purple-dark"]};
  }
`;

interface ShoppingCartButtonProps {
  cartItemsNumber: number;
}

export const ShoppingCartButton = styled.button<ShoppingCartButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme["yellow-light"]};

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  &::after {
    content: "${({ cartItemsNumber }) => cartItemsNumber}";
    position: absolute;
    display: ${({ cartItemsNumber }) => (cartItemsNumber > 0 ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme["yellow-dark"]};

    font-size: 12px;
    border-radius: 50%;
  }
`;
