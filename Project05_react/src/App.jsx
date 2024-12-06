import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Card user='Sailesh' city="Ratnanagar-14,Chitwan" age='30' />
      </div>
      <Footer />  
    </>
  )
}

export default App 