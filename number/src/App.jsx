

import React,{useState} from "react";
function App(){
    var [count, setCount] = useState(0)
    console.log("count", count);
    // function handleInc(){
    //     setCount(count+1)
    // }
    // function handleDec(){
    //     setCount(count-1)
    // }
    // function handleReset(){
    //     setCount(count=0)
    // }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
            <button onClick={()=>{setCount(count=0)}}>Reset</button>
        </div>
    )
}export default App




