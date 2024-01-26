import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";




// Imported the beep sound
import beepSound from "/Sound/Mouse.mp3";




const StartGame = ({ toggle }) => {
  // Function to play the beep sound
  const playBeepSound = () => {
    const audio = new Audio(beepSound);
    audio.play();
  };

  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        {/* Add onClick handler to play the beep sound */}
        <Button onClick={() => { toggle(); playBeepSound(); }}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
   
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      
    }
  }

  

`;
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/background_1.jpeg"); 
  background-size: cover;
  background-position: center;
     background-size: cover;
  background-position: center;
`;


