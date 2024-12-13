
import './App.css'
import Card from './Components/Card'

function App() {
 

  return (
    <>
    
     <h1 className="text-center text-4xl text-pink-600 mt-5">
       React Component
      </h1>
      <div className="flex justify-center gap-2 items-center">
      <Card name={"Soumya"}age={21}role={"SDE I"}/>
      <Card name={"Sonalli"}age={21}role={"SDE II"}/>
      <Card name={"Ritu"}age={21}role={"SDE III"}/>
      <Card name={"Niharika"}age={21}role={"SDE I"}/>
     </div>
    </>
  )
}

export default App
