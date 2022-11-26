import React from "react";
import { ButtonSearch, Container, Title, SectionInput, Main, Theme } from "./styledGlobal";
import { ThemeProvider } from "styled-components"
import { FiSun, FiSearch } from "react-icons/fi" 
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import Api from "./services/Api"
import Dark from "./theme/Dark";
import Light from "./theme/Light";

function App() {
  
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  const [color, setColor] = useState(Light)

  function change(e) {
    setInput(e.target.value)
  }
  
  function capture(e) {
   if(e.key === "Enter"){
   handleClick()
   }
  }
  
  async function handleClick() {
   
    if( input === '' ) {
      alert("Preencha algum cep!")
      return;
    }
    try{
      const response = await Api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    }
    catch{
      alert('Erro ao buscar!')
      setInput('')
    }
  }
  function lightOn() {
    setColor(Light)
  }
  function darkOn() {
    setColor(Dark)
  }


  return (
    
    <ThemeProvider theme={color} >
      <Container>
          <Theme>
              <FiSun size={25} color="#ffff00" 
              onClick={lightOn}/>
              <MdOutlineDarkMode size={25} color="#3333cc" 
              onClick={darkOn}/>
          </Theme>
      <Title>Buscador CEP</Title>
          
        <SectionInput>
          <input onChange={change}
          onKeyDown={capture}
          type="text" 
          value={input}
          placeholder="Digite seu cep..."/>

          <ButtonSearch onClick={handleClick}>
             <FiSearch size={25} color="#a64dff"/>
          </ButtonSearch>
        </SectionInput>

          {Object.keys(cep).length > 0 && (
          <Main>
            <h2>CEP:{cep.cep}</h2>

              <span>{cep.logradouro}</span>
              <span>UF: {cep.uf}</span>
              <span>Bairro: {cep.bairro} </span>
              <span>Cidade: {cep.localidade}</span>

          </Main>
          )}
      </Container>
    </ThemeProvider>   
   
  );
}

export default App;
