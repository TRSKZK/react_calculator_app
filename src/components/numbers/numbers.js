import React, { useState } from "react";
import Component from "react";
import styled from "styled-components";

const DisplayBody = styled.div`
width: 100%;
height: 40px;
border: 1px solid #8C8C8C;
font-size: 2rem;
text-align: end;
padding: 0 10px 0 10px;

`

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 5px;
  flex-wrap: wrap;
  width: 170px;
`;

const ButtonNumber = styled.button`
  border: 1px solid tomato;
  width: 50px;
  height: 50px;
  background-color: ##e0e1f8;
  font-size: 2rem;
  outline: none;
  cursor: pointer;

  flex-shrink: 0;
  flex-wrap: wrap;

  &:focus {
    transform: ease(0.98);
  }
  &:hover {
    color: red;
  }
`;

const MainContainer = styled.div`
display:grid;
grid-template-columns: 3fr 1fr;
`

const OperationBtnsContainer = styled(ButtonsContainer)`
display:grid;
grid-template-columns: repeat(2, 1fr);

width:100px;

`
const ClearBtn = styled(ButtonNumber)`
  color: #fffff;
  background-color: tomato;
  text-tarnsform:uppercase;
  font-size: 1rem;
  &:hover{
    color:white;
  }
`;
const OperationBtns = styled(ButtonNumber)`


`


function RenderNumbers() {
  const [data, setData] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, `,`, `%`].forEach((btn) => {
    calcBtns.push(
    <ButtonNumber
      onClick={(e) => {
        setData(data + e.target.value);
      }}
      value={btn}
      key={btn}
    >
      {" "}
      {btn}
      </ButtonNumber>)
      
  });
console.log(data);
  return (
    <>
      <DisplayBody>{data}</DisplayBody>
      <MainContainer>
        <ButtonsContainer>{calcBtns}</ButtonsContainer>
        <OperationBtnsContainer>
          <ClearBtn onClick={() => setData(data.substr(0, data.length - 1))}>⬅</ClearBtn>
          <ClearBtn onClick={() => setData("")}>Clear</ClearBtn>
          <OperationBtns onClick={e => setData(+data + e.target.value)} value="+">+</OperationBtns>
          <OperationBtns onClick={e => setData(data + e.target.value)} value="-">-</OperationBtns>
          <OperationBtns onClick={e => setData(data + e.target.value)} value="*">*</OperationBtns>
          <OperationBtns onClick={e => setData(data + e.target.value)} value="/">/</OperationBtns>
          <OperationBtns onClick={e => data.split(` `).forEach(el => {
            let num, res;
            if (+el !== NaN) num = +el;
            if (+el === NaN) return;
            res = num `${el}`+ num;
            return console.log(res);
          })
          
          } value="=">=</OperationBtns>
        </OperationBtnsContainer>
        
        </MainContainer>
    </>
  )
}

export default RenderNumbers;
