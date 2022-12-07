import styled from "styled-components";


export const Button = styled.button`
display: flex;
  align-items: center;
  width: 130px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 8px;
  background-color: grey;
  color: black;
  font-size: 8px;
  font-weight: 600;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1), 250ms;
  svg {
    margin-right: 4px;
    width: 25px;
    height: 25px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1), 250ms;
  }
  :hover {
    background-color: teal;
    svg {
      transform: scale(1.1);
    }
  }

`