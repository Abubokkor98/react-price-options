import Chart from "./Chart/Chart"
import PriceOptions from "./Navbar/Link/PriceOptions/PriceOptions"
import Navbar from "./Navbar/Navbar"
import Phones from "./Phones/Phones"

function App() {


  return (
    <div className="max-w-screen-xl">
      {/* navbar */}
      <Navbar></Navbar>

      <h1 className="text-3xl bg-yellow-300">Vite + React</h1>
      <PriceOptions></PriceOptions>
      {/* chart */}
      <Chart></Chart>
      {/* axios */}
      <Phones></Phones>
    
    </div>
  )
}

export default App
