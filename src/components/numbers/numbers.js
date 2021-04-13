import React from "react";
import Component from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap:5px;
  flex-wrap: wrap;
  width:170px
`;

const ButtonNumber = styled.button`
  border: 1px solid tomato;
  width: 50px;
  height: 50px;
  background-color: ##e0e1f8;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
  
  flex-shrink:0;
  flex-wrap: wrap;

  &:focus{
      
   transform: ease(.98);
  }
  &:hover {
    color: red;
  }
`;

const FuncBtns = styled(ButtonNumber)`
color: red;

`

function RenderNumbers() {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ButtonsContainer>
          <ButtonNumber>7</ButtonNumber>
          <ButtonNumber>8</ButtonNumber>
          <ButtonNumber>9</ButtonNumber>
          <ButtonNumber>4</ButtonNumber>
          <ButtonNumber>5</ButtonNumber>
          <ButtonNumber>6</ButtonNumber>
          <ButtonNumber>1</ButtonNumber>
          <ButtonNumber>2</ButtonNumber>
          <ButtonNumber>3</ButtonNumber>
          <ButtonNumber>0</ButtonNumber>
    </ButtonsContainer>
  );
}

export default RenderNumbers;
