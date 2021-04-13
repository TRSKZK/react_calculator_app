import React from 'react';
import styled from 'styled-components'

const DisplayBody = styled.div`
width: 100%;
height: 40px;
border: 1px solid #8C8C8C;
font-size: 2rem;
text-align: end;
padding: 0 10px 0 10px;

`

function Display() {
    return (
        <DisplayBody>0</DisplayBody>
    )
}

export default Display;