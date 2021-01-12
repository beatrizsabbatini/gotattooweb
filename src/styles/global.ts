import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer
  }
`;
