import Header from "./Components/Header"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Routing from "./Routing"
import Footer from "./Components/Footer"
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  )
}

export default App

