import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  border-top-right-radius: 25%;
  border-bottom-left-radius: 25%;
  background-color: ${({ theme }) => theme["base-card"]};

  img {
    position: relative;
    top: -1rem;
  }

  h3 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;

    margin-top: 1rem;
  }

  p {
    padding: 0 1.5rem;
    color: ${({ theme }) => theme["base-label"]};
    font-size: 0.875rem;
    line-height: 1.3;
    
    margin-top: 0.5rem;
  }
`;

export const CoffeeTags = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const CoffeeTag = styled.span`
  color: ${({ theme }) => theme["yellow-dark"]};
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.3;
  background: ${({ theme }) => theme["yellow-light"]};
  border-radius: 10px;
  padding: 0.25rem 0.5rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
    
  span, strong {
    color: ${({ theme }) => theme["base-text"]};
  }

  span {
    font-size: 0.825rem;
  }

  strong {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem;
    background: ${({ theme }) => theme["base-button"]};
    border-radius: 6px;
    
    button {
      border: 0;
      color: ${({ theme }) => theme.purple};
      background: transparent;
      
      cursor: pointer;

      &:hover {
        transition: color 0.25s;
        color: ${({ theme }) => theme["purple-dark"]};
      }
    }
    
    svg {
      display: flex;
      align-items: center;
      
    }
  }
  
  span {
    font-size: 1rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme["purple-dark"]};
  }
`;
