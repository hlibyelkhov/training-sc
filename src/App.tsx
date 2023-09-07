import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {Box} from "./components/Box.styled";

function App() {
  return (
    <div className="App">
      <Container>
        <Box>

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
