import './App.css';
import { useState } from 'react';



function App() {

const {number, setNumber} = useState();


  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter</h1>
      <h2>{number}</h2>
        <div className='buttons'>
        <button>-</button>
        <button>+</button>
      </div>
      <p>
        Click Buttons to increase/decrease the number!
        </p>
      </header>
     
    </div>
  );
}

export default App;
