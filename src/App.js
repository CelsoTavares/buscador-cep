import React from "react";
import { GlobalStyle, ButtonSearch, Container, Title, SectionInput, Main } from "./styledGlobal";
import { FiSearch } from "react-icons/fi" 
import { useState } from "react";
import Api from "./services/api"


function App() {
  
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  function change(e) {
    setInput(e.target.value)
  }
  
  async function handleClick() {
   
    if( input === '' ) {
      alert("Preencha algum cep!")
      return;
    }
    try{
      const response = await Api.get(`${input}/json`)
      setCep(response.data)
      console.log(response.data.cep)
      setInput('')
    }
    catch{
      alert('Erro ao buscar!')
      setInput('')
    }
  }

  return (
    <Container>
      <GlobalStyle />
      
      <Title>Buscador CEP</Title>
        
        <SectionInput>
          <input onChange={change} 
          type="text" 
          value={input}
          placeholder="Digite seu cep..."/>

          <ButtonSearch onClick={handleClick}>
             <FiSearch size={25} color="white"/>
          </ButtonSearch>
        </SectionInput>

          {Object.keys(cep).length > 0 && (
          <Main>
            <h2>CEP:{cep.cep}</h2>

              <span>{cep.logradouro}</span>
              <span>Complemento: {cep.complemento}</span>
              <span>{cep.bairro}</span>
              <span>{cep.localidade}</span>

          </Main>
            
          )}
    </Container>
  );
}

export default App;
