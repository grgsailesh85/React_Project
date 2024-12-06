import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {

  const users = [
    {
      name: "Alice Johnson",
      city: "New York",
      age: 28,
      profession: "Software Engineer",
      profilePicture: "https://example.com/images/alice.jpg"
    },
    {
      name: "Bob Smith",
      city: "Los Angeles",
      age: 34,
      profession: "Graphic Designer",
      profilePicture: "https://example.com/images/bob.jpg"
    },
    {
      name: "Charlie Davis",
      city: "Chicago",
      age: 25,
      profession: "Marketing Specialist",
      profilePicture: "https://example.com/images/charlie.jpg"
    },
    {
      name: "Diana Evans",
      city: "Houston",
      age: 30,
      profession: "Data Analyst",
      profilePicture: "https://example.com/images/diana.jpg"
    },
    {
      name: "Ethan Brown",
      city: "Phoenix",
        age: 40,
      profession: "Project Manager",
      profilePicture: "https://example.com/images/ethan.jpg"
    }
  ]


  return (
    <>
      <Navbar />
      <div className="p-10">
        {
          users.map((elem, index) => (
            <Card key={index} username={elem.name} age={elem.age} city={elem.city} photo={elem.profilePicture} prof={elem.profession}/>
          ))
        }
      </div>
      <Footer />  
    </>
  )
}

export default App 