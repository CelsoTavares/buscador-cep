import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: sans-serif;
}

`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#121212, #212b46);
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: min(9vw, 85px);
  color: white;
  animation: flip 2s;


@keyframes flip {
 from{
  transform: rotateX(90deg);
 }
 to{
  transform: rotateX(0deg);
 } 
 
}
`
export const SectionInput = styled.div`
 background: rgba(255,255,255,0.2);
 padding: 15px;
 display: flex;
 justify-content: space-between;
 border-radius: 8px;
 box-shadow: 1px 3px 8px rgba(0,0,0,0.5);
 margin: 34px 0;
 border: 1px solid yellow;
 width: 70%;
 max-width: 300px;
 position: relative;

 input{
  background: transparent;

  border: 0;
  font-size: 20px;
  outline: 0;
  color: #FFF;

 }
 input::placeholder{
  color:#f1f1f1;	
}

`

export const ButtonSearch = styled.button`
border: 0;
background: transparent;
cursor: pointer;
transition: all 0.5s;
position: absolute;
right: 4px;

  &:hover{
    transform: scale(1.2);
  }
`
export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #FFF;
width: 80%;
max-width: 500px;
border-radius: 8px;

  h2{
    font-size: min(7vw, 60px);
    margin: 16px 0;
  }

  span{
    font-size: max(1.5vw, 20px);
    margin-bottom: 16px;
    font-weight: bold;
  }
`