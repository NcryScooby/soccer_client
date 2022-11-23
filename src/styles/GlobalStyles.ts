import { createGlobalStyle } from "styled-components";
import MulishRegular from "../fonts/Mulish-Regular.ttf";
import MulishBold from "../fonts/Mulish-Bold.ttf";

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
    color: #232323;
  }


  body {  
    background: #F5F5F5;
  }
`;

export default GlobalStyles;
