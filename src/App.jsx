import './App.css';
import { About } from './Components/About/About';
import { MoreInfo } from './Components/MoreInfo/MoreInfo';
import Nav from './Components/NavBar/Nav';

function App() {

  return (
    <div>
      <Nav/>
      <About />
      <MoreInfo />
    </div>
  )
}

export default App
