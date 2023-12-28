import "./assets/styles/card.css"

function App() {
  
  const cardDesign = {
    backgroundColor :  "#efefef",
    padding: "10px",
    width: "10%"
  }

  return (
    <>
    <div>
      <div style={cardDesign}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </>
  )
}

export default App
