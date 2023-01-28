//importing usestate form react
import { useState } from "react";

function App() {
  //using useState hook store the result
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  //here we are handling all the buttons click
  const handleClick = (e) => {
    if (result === "Syntax Error") {
      return;
    }
    setResult(result.concat(e.target.name));
  };

  // clearing the display to empty when click of "clear" button
  const clear = () => {
    setResult("");
  };

  //calculating the result which is stored in the form of string
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Syntax Error");
    }
  };

  //handling percentage button
  const percent = () => {
    if (ops.includes(result.slice(-1))) {
      setResult("Syntax Error");
      return;
    }
    setResult(String(parseFloat(result) / 100));
  };

  //this is the function which executes on click of "+/-"
  //toggle the sign of result
  const minusPlus = () => {
    if (result.charAt(0) === "-") {
      setResult(result.substring(1));
    } else {
      setResult("-" + result);
    }
  };

  //handling DEL button and getting previous value
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  //this is my jsx for calculator
  return (
    <div className="App">
      {/*---title------ */}
      <div className="title">
        <h1>CALCULATOR</h1>
      </div>
      {/* ----container----- */}
      <div className="calculator-container">
        {/* -----Display of the calculator------- */}
        <form>
          <input type="text" value={result ? result : "0"} />
        </form>

        {/*------- Buttons of the calculator--------- */}
        <div className="keyboard">
          <button className="heighlight" onClick={clear}>
            AC
          </button>
          <button className="heighlight" onClick={backspace}>
            DEL
          </button>
          <button className="heighlight-opts" onClick={minusPlus}>
            +/-
          </button>
          <button className="heighlight-opts" onClick={percent}>
            %
          </button>
          <button className="heighlight-opts" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="heighlight-opts" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="heighlight-opts" name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="heighlight-opts" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick} id="zero">
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="heighlight-opts" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
