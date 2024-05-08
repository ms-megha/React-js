
import Card from "./Card"
function Tours({tours, removeTour}) {

  return (
    <>
        <div className="container">
            <h1 className="title">Plan With Me</h1>
        </div>
        <div className="card">
        {
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} />
          ))
        }
      </div>
       
    </>
  )
}

export default Tours
