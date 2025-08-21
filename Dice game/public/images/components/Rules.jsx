import React from 'react'
import styled from 'styled-components'

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game, simple</h2>
            <div className='text'>
                <p> After click in the dice if selected number is equal to the dice number you will get same points as dice has </p>
                <p>If you get the wrong guess 2 points will be decdcuted</p>
            </div>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
background-color:#fbf1f1;
padding:20px;
border-radius:20px;
max-width:800px;
margin:0 auto;
margin-top:40px;

h2{
font-size: 24px
}

.text{
margit-top:24px;
}

`;
