import products from "@/json/products"
import Image from "next/image"
import Link from "next/link"

const Products = () =>{
    const getPrice = (item) =>{
        const amount = (item.price * item.discountPercentage)/100
        const realPrice = item.price - amount
        return realPrice.toFixed(2)
    }

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:gap-6 gap-8">
                {
                    products.map((item,index)=> (
                        <div key={index} className="bg-white shadow-lg rounded-lg border border-gray-300" >
                            <Image 
                                src={item.thumbnail} 
                                width = {400}
                                height = {300}
                                alt = {item.title}
                            />
                            <div className="px-6 pb-6">
                                <Link 
                                    className="text-lg font-semibold" 
                                    href={`/products/${item.title.split(" ").join("-")}`}
                                >
                                    {item.title}
                                </Link>
                                <div className="space-x-3">
                                    <label>Rs.{getPrice(item)}</label>
                                    <del>{item.price}</del>
                                    <label>({item.discountPercentage}% Off)</label>
                                </div>
                                <div className="mt-4 flex flex-col gap-3">
                                    <button className="bg-green-600 px-4 py-2 rounded text-white">
                                        <i className="ri-shopping-cart-line mr-2"></i>
                                        Add to Cart 
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Products