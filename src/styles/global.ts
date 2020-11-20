import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-transition: all .2s;
  }

  p {
    font-size: 18px;
    line-height: 35px;
  }

  img {
    width: 100%;
  }

  ::selection {
    background: #424549;
  }

  body{
    background: #1E2124;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px 'Roboto', 'Ubuntu', 'sans-serif';
  }
  button{
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .container{
    max-width: 1580px;
    width: 100%;
    margin: 0 auto;
  }
`;