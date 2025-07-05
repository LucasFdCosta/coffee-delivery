import { styled } from "styled-components";

export const Container = styled.div`
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
