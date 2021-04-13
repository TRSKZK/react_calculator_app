import React from "react";
import Component from "react";
import styled from "styled-components";

const ButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  gap:5px;
`;
const ButtonsLiContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const ButtonNumber = styled.button`
  border: 1px solid tomato;
  width: 50px;
  height: 50px;
  background-color: ##e0e1f8;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

function RenderNumbers() {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ButtonsContainer>
      <ButtonsLiContainer>
        <ButtonNumber>1</ButtonNumber>
          </ButtonsLiContainer>
          <ButtonsLiContainer>
        <ButtonNumber>2</ButtonNumber>
      </ButtonsLiContainer>
    </ButtonsContainer>
  );
}

export default RenderNumbers;
