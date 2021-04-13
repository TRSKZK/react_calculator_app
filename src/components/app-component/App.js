import React from "react";
import DisplayBody from '../display/display'
import styled from "styled-components";

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
        <DisplayBody></DisplayBody>
    </CalcBody>
  );
}

export default App;
