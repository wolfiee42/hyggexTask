import './App.css'
import NavigationSec from './components/navigationSec/NavigationSec'
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-family: 'Poppins', sans-serif;
  }
`;
function App() {


  return (
    <>
      <GlobalStyle />
      <NavigationSec />
    </>
  )
}

export default App
