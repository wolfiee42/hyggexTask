import './App.css'
import BreadCrump from './components/breadCrump/BreadCrump';
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
      <BreadCrump/>
    </>
  )
}

export default App
