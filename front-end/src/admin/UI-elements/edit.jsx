import styled from "styled-components";
const EditButton = styled.button `
display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #black;
  background-color: #grey;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  &:hove{
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }
  &:active{
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`
export default EditButton;