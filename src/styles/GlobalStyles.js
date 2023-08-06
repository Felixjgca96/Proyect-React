import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --azul-bg: #0b353e;
        --btn: rgb(69, 72, 69);
    }
  html{
    scroll-behavior: smooth;
    scroll-padding-top: 30px;

  }
    
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #090909;
      font-family: 'Montserrat', sans-serif;
      color: white;
      -webkit-tap-highlight-color: transparent;
      overflow-x: hidden;

    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }

`;
