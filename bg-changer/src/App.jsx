import { useState } from "react";
import "./App.css";

function App() {
  const [color,setcolor] = useState("black")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center items-center px-2">
      <h2 className="p-5 text-lg m-3 text-white font-medium">Click any button to change the background color</h2>
        <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button  onClick={()=> setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setcolor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
