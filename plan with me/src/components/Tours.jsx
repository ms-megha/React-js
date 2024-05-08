
import Card from "./Card"
function Tours({tours, removeTour}) {

  return (
    <>
        <div>
            <h1>Plan With Me</h1>
        </div>
        <div>
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
