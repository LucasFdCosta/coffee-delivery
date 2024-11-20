import styled from "styled-components";

export const HomeContainer = styled.main`
  /* padding: 2rem 10rem; */
`;

export const IntroContainer = styled.main`
  display: flex;
  position: relative;
  align-items: center;  
  justify-content: space-between;
  padding: 2rem 10rem;

  img#background-image {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
    width: 100vw;
  }

  section {
    width: 36.75rem;
  }

  strong {
    font-size: 3rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme["base-title"]};
  }
  
  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-top: 1rem;
  }
`;

export const ShopQualityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  display: flex;

  flex-wrap: wrap;
`;

export const CoffeeListContainer = styled.div`
  padding: 2rem 10rem;

  h2 {
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;
