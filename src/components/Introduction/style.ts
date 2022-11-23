import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
    gap: 4rem;
  }

  h1 {
    font-size: 5rem;
    max-width: 10ch;
    span {
      color: #ffc700;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media (max-width: 768px) {
      gap: 2rem;
    }
    p {
      font-size: 1.5rem;
      max-width: 30ch;
      span {
        color: #ffc700;
      }
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }

  .animation {
    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;
