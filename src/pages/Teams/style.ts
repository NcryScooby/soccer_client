import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 16px 256px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    color: #000;
    cursor: pointer;
  }
`;
