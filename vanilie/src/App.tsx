import { createGlobalStyle } from 'styled-components';
import Routes from './routes/Routes';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto';
  }
`

function App() {

  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  )
}

export default App
