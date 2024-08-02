import css from 'styled-jsx/css';

export default css.global`
:root {
  --background: #f1f1f1;
  --white: #ffffff;
  --black: #000000;
  --blue: #1b57fa;
  color: var(--black);
  overflow-x: hidden;
}
  body {
    width: 100%;
    Height: 100dvh;
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-weight: 400;
    font-family: sans-serif;
    background-color: var(--background);
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #0029bf;
    border-radius: 5px;
  }
  h1 {
    font-weight: 700;
    font-size: 18px;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
  }
  input[type=text]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #bbb;
    border-radius: 4px;
    box-sizing: border-box;
  }
  textarea{
    width: 100%;
    padding: 12px 0px;
  }
  label{
    width: 100%;
  }
`;