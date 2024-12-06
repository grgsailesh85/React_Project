const Card = (props) => {
  return (
    <div className="bg-white text-black inline-block p-6 text-center rounded">
        <img className="ml-8 h-32 w-32 rounded-full mb-3" src="" alt="" />
        <h1 className="text-2xl font-semibold mb-4">{props.user}</h1>
        <h2>{props.city}, {props.age}</h2>
        <button className=" mt-5 bg-amber-400 text-black px-4 py-2 rounded font-medium">Add Button</button>
    </div>
  )
}

export default Card