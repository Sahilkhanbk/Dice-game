import { useState } from "react";
import styled from "styled-components"

const NumberSelect = ({ setSelectedValue, selectedValue, error, setError }) => {

    const arrayNumber = [1, 2, 3, 4, 5, 6];

    const numberSelector = (  val ) => {
        setSelectedValue(val)
        setError("")
    }
    return (
        <NumberContainer>
            <p className="errorc">{error}</p>
            <div className="flex">
                {arrayNumber.map((val, i) => (
                    <Box
                        key={i}
                        onClick={() => numberSelector(val)}
                        isSelected={val === selectedValue}
                    >
                        {val}
                    </Box>
                ))};
            </div>
            <p>Select Number</p>
        </NumberContainer>
    )
}

export default NumberSelect

const NumberContainer = styled.div`
display:flex;
flex-direction:column;
align-items:end;

.flex{
         display:flex;
         gap:24px;
 }
p{
   font-size:20px;
   font-weight:800; 
   margin-right:28px;
 }

 .errorc{
 color:red;
 }


`


const Box = styled.div`
width:62px;
height:62px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700px;

background:${(props) => props.isSelected ? "black" : "white"};
color:${(props) => props.isSelected ? "white" : "black"};


`

