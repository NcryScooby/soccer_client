import { createGlobalStyle } from "styled-components";
import MulishRegular from "../fonts/Mulish-Regular.ttf";
import MulishBold from "../fonts/Mulish-Bold.ttf";
import abstract from "../assets/background.svg";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Mulish";
    src: url(${MulishRegular});
  }

  @font-face {
    font-family: "Mulish-Bold";
    src: url(${MulishBold});
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Mulish", sans-serif;
    color: #fff;
  }

  body {
    background-image: url(${abstract});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    
  }
`;

export default GlobalStyles;
