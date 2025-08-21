import styled from "styled-components"

export const Button = styled.button`
padding:10px 18px;
font-size:19px;
width:220px;
height:44px;
background:#000000;
color:white;
border-radius:5px;
border:none;
transition:all 0.4s ease;


&:hover{
background-color:white;
color:black;
border:1px solid black;
transition:all 0.3s ease;
}
`;


export const OutlineButton = styled(Button)`
background-color:white;
border:1px solid black;
color:black;
 &:hover{
     background-color:black;
     color:white;
     border:1px solid transparant;
 }

`