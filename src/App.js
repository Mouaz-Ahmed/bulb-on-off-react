import logo from './logo.svg';
import './App.css';
import Default from '../src/components/Dafault'
import On from '../src/components/On'
import Off from '../src/components/Off'
import Broke from '../src/components/Broke'
import { useState } from 'react';

function App() {
  let [mode,setMode] = useState('https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg')
  let changeMode = (src) =>{
    setMode(src)
  }
  return (
    <div className="App">
      <Default mode = {mode}/>
      <br />
      <br />
      <On changeMode={changeMode} />
      <Off changeMode={changeMode}/>
      <Broke changeMode={changeMode}/>
    </div>
  );
}
export default App;




// Develop 4 components.
// 1) Should show a Bulb Image (default: bulb) depending on the main component's state.
// 2) Should show a `Switch On` button, on pressing it, the first component should show lightBulb image.
// 3) Should show a `Switch Off` button, on pressing it, the first component should show bulb image.
// 4) Should show a `Break The Bulb` button, on pressing it, the first component should show brokenBulb image.
