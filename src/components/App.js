
import React from "react";
import './../styles/App.css';
import { useState } from 'react';


const App = () => {
  
//   let [count,setCount] = useState(0);
  
//   function countClicks(){
//      setCount(count+1)
//   }
//   return(
    
//         <div>
//           <p>Button Clicked {count} times</p>
//           <button onClick={countClicks}>Click me</button>
//         </div>
    
//   )
  let [counter, setCounter]=  useState(0);
  return (
    <div>
      <p>Button clicked {counter} times</p>
       <button onClick={()=>{setCounter(counter+1)}}>Click me</button>
    </div>
  )
}

export default App
