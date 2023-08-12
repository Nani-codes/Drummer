import './App.css';
import { useEffect, useState } from "react";
import alphabets from './alphabets.js';
function App() {
  const [activekey, setActivekey] = useState('');
  useEffect(() => {
    
    document.addEventListener('keydown',(event)=>{
      console.log(event.key)
      sound(event.key.toUpperCase())
    })
  }, [])
  
  function sound(alphabet) {
    const audio = document.getElementById(alphabet);
    console.log(audio);
    audio.play();
    setActivekey(alphabet);
  }
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          {activekey}
        </div>
        <div className="drum-pads">
          {alphabets.map((alphabets)=>( 
          <div
           onClick={()=>{
            sound(alphabets.text)
           }} 
           className="drum-pad" 
           id={alphabets.src}
          >
            {alphabets.text}
            <audio 
              className="clip" 
              id={alphabets.text} 
              src={alphabets.src}
            ></audio>
          </div>))}
        </div>
        
      </div>
    </div>
  );
}

export default App;
