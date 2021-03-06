import './App.css';
import { useState } from 'react';



function App() {

const [number, setNumber] = useState(0);

const decrease = ()=>{
  if(number>0){setNumber((prevNumber)=>{
    return prevNumber -1;
  })}
}

const increase = ()=>{
  setNumber((prevNumber)=>{
    return prevNumber +1;
  })
}

const reset = ()=>{
  setNumber(0)
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter</h1>
      <h1>{number}</h1>
        <div className='buttons'>
        <button onClick={()=>{decrease()}}>-</button>
        <button onClick={()=>{increase()}}>+</button>
      </div>
        <button onClick={()=>{reset()}} id="reset">Reset</button>
      <p>
        Click Buttons to increase/decrease the number!
        </p>
      </header>
     
    </div>
  );
}

export default App;
