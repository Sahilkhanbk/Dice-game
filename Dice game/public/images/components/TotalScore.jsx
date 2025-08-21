import React from 'react'
import styled from 'styled-components'

function TotalScore({score}) {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Totol score</p>
        </ScoreContainer>
    )
}

export default TotalScore


const ScoreContainer = styled.div`

   max-width:200px;
   text-align:center;
  h1{
     font-size:50px;
     line-height:50px;
     margin-bottom:-12px
  }

  p {
   font-size:24px;
   font-weight:500px;
  }
`
