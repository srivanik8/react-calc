import {useState} from 'react';
import "./style.css";

function App(){
  const [calc, setCalc] = useState("");
  const [result , setResult] = useState("");

  const ops = ['/', '*', '-', '+', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ) {
        return;
      }

     setCalc(calc + value);

     if(!ops.includes(value)) {
       setResult(eval(calc + value).toString());
     }
  }
  
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const ac = () => {
    if (calc == ''){
      return;
    }
    const value = calc.slice(-1 , 0 )
    setCalc(value);
  }

  return(
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{result ? <span>{result}</span> : '' }</div>
        <div className="current-operand">{calc || "0"}</div>
      </div>
      <button className="span-two" onClick={ac}>AC</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={() => updateCalc('/')}>/</button>
      <button onClick={() => updateCalc('1')}>1</button>
      <button onClick={() => updateCalc('2')}>2</button>
      <button onClick={() => updateCalc('3')}>3</button>
      <button onClick={() => updateCalc('*')}>*</button>
      <button onClick={() => updateCalc('4')}>4</button>
      <button onClick={() => updateCalc('5')}>5</button>
      <button onClick={() => updateCalc('6')}>6</button>
      <button onClick={() => updateCalc('+')}>+</button>
      <button onClick={() => updateCalc('7')}>7</button>
      <button onClick={() => updateCalc('8')}>8</button>
      <button onClick={() => updateCalc('9')}>9</button>
      <button onClick={() => updateCalc('-')}>-</button>
      <button onClick={() => updateCalc('.')}>.</button>
      <button onClick={() => updateCalc('0')}>0</button>
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  )
}
export default App
