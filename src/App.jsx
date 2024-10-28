import Chart from "./Chart/Chart"
import PriceOptions from "./Navbar/Link/PriceOptions/PriceOptions"
import Navbar from "./Navbar/Navbar"

function App() {


  return (
    <div className="max-w-screen-xl">
      {/* navbar */}
      <Navbar></Navbar>

      <h1 className="text-3xl bg-yellow-300">Vite + React</h1>
      <PriceOptions></PriceOptions>
      {/* chart */}
      <Chart></Chart>
    
    </div>
  )
}

export default App
