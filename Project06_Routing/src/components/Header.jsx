import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="py-7 px-10 bg-blue-600 text-white text-xl font-bold flex items-center justify-between">
        <h2 className="text-2xl">Sailesh</h2>
        <div className="flex gap-10 text-lg">
            <Link className="hover:text-black" to='/'>Home</Link>
            <Link className="hover:text-black" to='/about'>About</Link>
            <Link className="hover:text-black" to='/product'>Product</Link>
            <Link className="hover:text-black" to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Header