import { styled } from "styled-components";

export const ShopQualityItemContainer = styled.div`
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
  }
`;
