import styled from 'styled-components'

const RollDice = ({setCurrentDice, currentDice , roolDice2 ,generateRandomNumber}) => {


    return (
        <DiceContainer>
            <div className='dice' onClick={roolDice2}>
                <img src={`../../public/images/dice_${currentDice}.png`} alt="img" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice


const DiceContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

 p{
   font-size:24px
 }

 .dice{
   cursor:pointer
}

`