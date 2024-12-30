import React, { useState,useEffect } from 'react'
import ChildComponent from './ChildComponent';



let Hooks=() =>{
    let[counter1,setCounter1] = useState(0);
    let[counter2,setCounter2] = useState(10);
    let[isDisplay,setDisplay] = useState(true);

    let handleCounter1 = () => {
        setCounter1(counter1 + 1);
    }
    let handleCounter2 = () => {
        setCounter2(counter2 + 1);
    }
    let handleDisplay= () => {
        setDisplay(!isDisplay);

    }
    useEffect(() => {
      return  () => {

      };
    },[counter2]);
  return (
    <>
        <h2>Counter1 : {counter1}</h2>
        <h2>Counter2 : {counter2}</h2>

        <button onClick={handleCounter1}>ChangeCounter1</button>
        <button onClick={handleCounter2}>ChangeCounter2</button>
        <hr />

        <button onClick={handleDisplay}>Toogle Hook Component</button>
        {isDisplay ? <ChildComponent/>:null}
    </>
  )
}

export default Hooks;
