import React, { useEffect, useState } from 'react'

function Mtimer() {
   
    let [count,setCount] = useState(0);
    let [running,setRunning] = useState(false);

    useEffect(()=>{

      let id;

      if(running){
        id = setInterval(() => {
          setCount(count + 1);
        }, 1000);

      }
      return () => {
        clearInterval(id);
      };

    }, [count, running]);

  function handleStart(){
      setRunning(true);
    }

  function handleStop(){
    setRunning(false);
    setCount(0);
  }

  return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{border: "1px solid black",margin:"10px",
                padding: "10px", width: "10vw"
            }}>{count}
        </div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
      </div>
  )
}

export default Mtimer