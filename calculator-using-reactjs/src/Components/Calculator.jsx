import React from "react";
import "/src/index.css";
import { useState } from "react";

const Calculator = () => {

    const [value, setValue] = useState('');

    const output = (e) => {
        setValue(value + e.target.value);
    }

  return (
    <>
      <div className="container">
        <div className="calculator-wripper">
          <form action="">
            <div className="display">
              <input type="button" value={value} />
            </div>

            <div>
              <input type="button" value={"Ac"} onClick={(e) => setValue('')} className="btn2-bg" />
              <input type="button" value={"Del"} onClick={(e) => setValue(value.slice(0, -1))} className="btn2-bg" />
              <input type="button" value={"."} className="btn2-bg" onClick={output}  />
              <input type="button" value={"/"} className="btn2-bg" onClick={output} />
            </div>

            <div>
              <input type="button" value={"7"} onClick={output} />
              <input type="button" value={"8"} onClick={output} />
              <input type="button" value={"9"} onClick={output} />
              <input type="button" value={"+"} onClick={output} className="btn1-bg"/>
            </div>

            <div>
              <input type="button" value={"4"} onClick={output} />
              <input type="button" value={"5"} onClick={output} />
              <input type="button" value={"6"} onClick={output} />
              <input type="button" value={"-"} onClick={output} className="btn1-bg" />
            </div>

            <div>
              <input type="button" value={"1"} onClick={output} />
              <input type="button" value={"2"} onClick={output} />
              <input type="button" value={"3"} onClick={output} />
              <input type="button" value={"*"} onClick={output} className="btn1-bg" />
            </div>

            <div>
              <input type="button" value={"00"} onClick={output} />
              <input type="button" value={"0"} onClick={output} />
              <input type="button" value={"="} className="equal" onClick={(e) => setValue((eval(value)))} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Calculator;
