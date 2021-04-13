import React from "react";
import "./App.css";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <div className="calc-container">
        <h1>hello REct world</h1>
      </div>
    </AppWrapper>
  );
}

export default App;
