
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  const decrement=()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  const increment = ()=>{
    if(count<20){
      setcount(count+1)
    }
  }
  return (
    <>
      <div className="bg-orange-800 w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-10">
        <h2 className="text-lg text-slate-950 font-bold	font-serif	">Increment And Decrement</h2>
        <div className="flex bg-white text-[25px] text-[#344151] p-3 px-5 rounded-sm">
            <button className="border-r-2 border-[#bfbfbf] pr-5" onClick={decrement}>-</button>
            <div id="counter" className="p-5 font-bold">{count}</div>
            <button className="border-l-2 border-[#bfbfbf] pl-5" onClick={increment}>+</button>
        </div>
    </div>
    </>
  )
}

export default App
