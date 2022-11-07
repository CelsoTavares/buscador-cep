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
  background: #121212;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: min(9vw, 85px);
  color: #bf80ff;
  box-shadow: 1px 1px 15px #a64dff;
  padding: 1%;

`
export const SectionInput = styled.div`
 background: rgba(255,255,255,0.2);
 padding: 15px;
 display: flex;
 justify-content: space-between;
 border-radius: 8px;
 margin: 34px 0;
 width: 70%;
 max-width: 300px;
 position: relative;
 border: 2px solid #a64dff;	
 transition: all 0.5s;
 
 &:hover  {
   box-shadow: 1px 1px 15px #a64dff;
  }
  
 input{
  background: transparent;
  border: 0;
  font-size: 20px;
  outline: 0;
  color: #a64dff;	

 }
 input::placeholder{
  color: #a64dff;	
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
flex-direction: column;
background: rgba(255,255,255,0.8);
width: 80%;
max-width: 500px;
border-radius: 8px;
color: #330066;
padding: 2%;

  h2{
    font-size: min(7vw, 60px);
    margin: 16px 0;
    text-align: center;
  }

  span{
    font-size: max(1.5vw, 20px);
    margin-bottom: 16px;
    font-weight: bold;
  }
`