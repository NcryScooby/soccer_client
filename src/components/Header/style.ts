import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  }

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .list a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #ffffff;
    @media (max-width: 768px) {
      color: inherit;
    }
  }
`;
