import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    background-color: white;
    color: black;
    padding: 15px 32px;
    border: 2px solid #555555;
    border-radius: 8px;
    margin: auto;

    &:hover{
        background-color: #555555;
        color: white; 
    }
`

function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
  }
  
  export default Button;