import React, { useState } from "react";
import "./App.css";
import Button from "./module/Button/Button";
import Input from "./module/Input/Input";

function App() {
  const numArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [newValue , setNewValue] = useState(0);        

  const btFun = (btValue : number) => 
  {
    console.log("btFun Called",btValue);
    setNewValue(btValue);
  };

  //------------------------------------ Two way data binding ---------------------------------

  const btArr = numArr.map((numValue) => 
  (<Button key={numValue} btFun={btFun} btName={numValue} />));

  console.log("btArr", btArr);

  return (
    <div>

      <h1>react typescript</h1>

      <Input inputValue={newValue} btFun={btFun}/>

      <br />
      <br />

      {btArr}

    </div>
  );
}

export default App;
