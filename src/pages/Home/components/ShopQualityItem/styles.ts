import { styled } from "styled-components";

interface ShopQualityItemContainerProps {
  icon: "shopping-cart" | "package" | "timer" | "coffee";
}

export const ShopQualityItemContainer = styled.div<ShopQualityItemContainerProps>`
  display: flex;
  width: 18.375rem;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme["base-text"]};
  }
  
  svg {
    padding: 0.5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme, icon }) => {
      switch (icon) {
        case "package":
          return theme["base-text"];

        case "timer":
          return theme.yellow;

        case "coffee":
          return theme.purple;

        default:
          return theme["yellow-dark"];
      }
    }};
  }
`;
