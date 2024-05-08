import { useState } from 'react'
import './App.css'
import data from './data'
import Tours from './components/Tours'

function App() {
  const [tours, setTours] = useState(data)
  function removeTour(id){
    const newTour=tours.filter(tour=>tour.id != id)
    setTours(newTour)

  }
  if(tours.length ===0){
    return(
      <div className='refresh'>
        <h2>No Tours left</h2>
        <button onClick={()=>setTours(data)}>Refresh</button>

      </div>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour}></Tours>
       
    </>
  )
}

export default App
