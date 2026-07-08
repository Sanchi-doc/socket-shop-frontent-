import styled from "styled-components";

export const formStyled = styled.form`
    display: flex;
    margin: 0 auto;
    width: 550px;
    margin-top: 100px;
    flex-direction: column;
    background-color: #00adff;
`
export const inputStyled = styled.input`
   margin-bottom: 20px;
    width: 510px;
`
export const buttonStyled = styled.button`
   position: absolute;
    top: -3px;
    right: -276px;
    background: transparent;
    border: none;
    width: 510px;
    &:focus,&:active{
    outline: none;
    }
`