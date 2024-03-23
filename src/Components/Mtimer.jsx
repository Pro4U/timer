import React, { useEffect, useState } from 'react'

function Mtimer() {
   
    let [count,setCount] = useState(0);

    useEffect(function(){
        setCount(count+1);
    },[])

  return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{border: "1px solid black",margin:"10px",
              padding: "10px", width: "10vw"
          }}>{count}</div>
          <button>Start</button>
          <button>Stop</button>
    </div>
  )
}

export default Mtimer