import { styled } from "styled-components";

interface IconProps {
  icon:
    | "shopping-cart"
    | "package"
    | "timer"
    | "coffee"
    | "map-pin"
    | "dollar-sign";
}

export const Container = styled.div<IconProps>`
  max-width: 2rem;
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

        case "map-pin":
          return theme.purple;

        case "dollar-sign":
          return theme["yellow-dark"];

        default:
          return theme["yellow-dark"];
      }
    }};
  }
`;
