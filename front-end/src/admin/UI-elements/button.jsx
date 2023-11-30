import styled from 'styled-components';
const Button = styled.button `
font-family: monospace;
font-size: 1.5rem;
color: #FAFAFA;
text-transform: uppercase;
padding: 10px 20px;
border-radius: 10px;
border: 2px solid #FAFAFA;
background: #252525;
box-shadow: 3px 3px black;
cursor: pointer;
margin: 35px 0;
&::active{
    box-shadow: none;
    transform: translate(3px, 3px);
}
`
export default Button;