import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'

function GamePlay() {
    const [score, setScore] = useState(0)
    const [selectedValue, setSelectedValue] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("")
    const [showRules, setShowRules] =useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }


    const roolDice2 = () => {

        if (!selectedValue) {
            setError("You did not select any number")
            return
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber)

        if (selectedValue === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedValue(undefined)

    }

    const resetScore = () => {
        setScore(0)
    }



    return (
        <MainContainer>
            <div className='topSection'>
                <TotalScore
                    score={score}
                />
                <NumberSelect
                    setError={setError}
                    error={error}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
            </div>
            <RollDice
                setCurrentDice={setCurrentDice}
                currentDice={currentDice}
                generateRandomNumber={generateRandomNumber}
                roolDice2={roolDice2}
            />
            <div className="btns">
                <OutlineButton onClick={resetScore} className='resets'>Reset</OutlineButton>
                <Button
                onClick={()=>setShowRules((prev) => !prev)}
                >
                    {showRules? "Hide" : "Show"}
                    Show rules
                </Button>
            </div>

            {  showRules && <Rules/>}

        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
// padding-top:px;

.topSection{
   display:flex;
   justify-content:space-between;
   align-items:end
 }

 .btns{
    margin-top:30px;
    gap:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
 }




`;
