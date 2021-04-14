import React from "react";

import RenderNumbers from '../numbers/numbers'
import styled from "styled-components";
import MathOperations from '../function-btns/function-btns'

const CalcBody = styled.div`
  padding: 10px;
  height: 100vh;
  height: 400px;
  width:300px;
  background-color: #FEFEFE;
  border: 2px solid black;

`

function App() {
  return (
    <CalcBody>
          
          <RenderNumbers></RenderNumbers>
          
    </CalcBody>
  );
}

export default App;
