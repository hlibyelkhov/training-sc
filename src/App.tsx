import React from 'react';
import './App.css';
import styled from "styled-components";
import {Box} from "./components/Box.styled";
import Img from './images/Rectangle 1.png';
import {StyledBtn} from "./components/Button.styled";

function App() {
    return (
        <div className="App">
            <Container>
                <Box>
                    <img src={Img} alt=""/>
                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                    <StyledBtn>See more</StyledBtn>
                    <StyledBtn>Save</StyledBtn>
                </Box>
            </Container>
        </div>
    );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
