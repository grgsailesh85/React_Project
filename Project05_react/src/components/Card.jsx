const Card = (props) => {
  return (
    <div className=" mr-6 bg-white text-black inline-block p-6 text-center rounded">
        <img className="ml-8 h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
        <h1 className="text-2xl font-semibold mb-4">{props.username}</h1>
        <h4 className="text-blue-600">{props.prof}</h4>
        <h2>{props.city}</h2>
        <h2>Age: {props.age}</h2>
        <button className=" mt-5 bg-amber-400 text-black px-4 py-2 rounded font-medium hover:bg-green-600">Add Button</button>
    </div>
  )
}

export default Card