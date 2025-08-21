
import image from '../../public/images/wall.png'
import styled from 'styled-components'
import { Button } from './styled/Button'



function StartGame({ toggle }) {
    return (
        <Container>
            <div>
                <img src={image} alt="" />
            </div>

            <div className='startContent'>
                <h1>Dice Game</h1>
                <Button onClick={toggle} >
                    Start now
                </Button>
            </div>



        </Container>

    )
}

export default StartGame


const Container = styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:90vh;
align-items:center;

.startContent{
  h1{
    font-size:90px;
    white-space:nowrap;
  }
}

`;

