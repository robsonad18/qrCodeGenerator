import { useState } from 'react';
import './App.css';
import QrcodeCanvas from './QrcodeCanvas';

function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <input onChange={(element)=>setText(element.target.value)} value={text} type="text"></input>
      <QrcodeCanvas text={text}/>
    </div>
  );
}

export default App;
