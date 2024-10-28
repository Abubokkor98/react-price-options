import PriceOptions from "./Navbar/Link/PriceOptions/PriceOptions"
import Navbar from "./Navbar/Navbar"

function App() {


  return (
    <div className="max-w-screen-2xl">
      {/* navbar */}
      <Navbar></Navbar>

      <h1 className="text-3xl bg-yellow-300">Vite + React</h1>
      <PriceOptions></PriceOptions>
    
    </div>
  )
}

export default App
