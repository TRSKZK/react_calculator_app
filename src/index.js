import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app-component/App';
import reportWebVitals from './reportWebVitals';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
  font-family: 'Inconsolata', monospace;
  
  
}
`
const AppWrapp = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
`

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <AppWrapp>
        <App />
        </AppWrapp>
      </>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
