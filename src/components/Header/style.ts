import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 8rem;
  width: 1200px;
  margin: 0 auto;

  .list {
    display: flex;
    align-items: center;
    gap: 4rem;
    text-transform: uppercase;
  }

  .list a {
    text-decoration: none;
    font-size: 0.9rem;
    font-family: "Mulish-Bold";
  }
`;
