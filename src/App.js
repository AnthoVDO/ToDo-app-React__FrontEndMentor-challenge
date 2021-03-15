import Container from "./components/Container";
import {useState} from 'react';



function App() {

  // Light mode

const [lightMode, setLightMode] = useState(false);
const lightOn = () => {
    lightMode === false? setLightMode(true):setLightMode(false);
}

  return (
    <div className={lightMode===true? "App app__lightMode" : "App"}>
      <Container lightMode={lightMode} lightOn={lightOn}/>
    </div>
  );
}

export default App;
