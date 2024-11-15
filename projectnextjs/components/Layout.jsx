'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
const Layout = ({children}) =>{

    const pathname = usePathname()
    
    //returns page without layout nav and footer 
    const blacklists = [
        '/login',
        '/signup'
    ]
    if(blacklists.includes(pathname))
        return (
            <>
                {children}
            </>
        )

    const menus = [
        {
            label : 'Home',
            link : '/',
            icon : 'ri-home-line'
        },
        {
            label : 'Products',
            link : '/products',
            icon : 'ri-product-hunt-line'
        },
        {
            label : 'Carts',
            link : '/carts',
            icon : 'ri-shopping-cart-line'
        },
        {
            label : 'Login',
            link : '/login',
            icon : 'ri-login-box-line'
        },
    ]

    const socialLinks = [
        {
            label : "Facebook",
            link : 'www.facebook.com',
            icon : 'ri-facebook-circle-fill'
        },
        {
            label : "Twitter",
            link : 'www.twitter.com',
            icon : 'ri-twitter-fill'
        },
        {
            label : "Instagram",
            link : 'www.instagram.com',
            icon : 'ri-instagram-fill'
        },
        {
            label : "Linkedin",
            link : 'www.linkedin.com',
            icon : 'ri-linkedin-box-fill'
        },
        {
            label : "Youtube",
            link : 'www.Youtube.com',
            icon : 'ri-youtube-fill'
        },
        
    ]

    return(
        <div>

            {/* navbar */}
            <nav className="bg-gray-600 lg:py-6 lg:px-24 py-3 px-6 flex justify-between items-center" >
                <h1 className="text-white text-xl font-semibold">
                    ECommerce
                </h1>
                <div className="space-x-16 lg:block hidden">
                    {
                        menus.map((item, index) => (
                            <Link href={item.link} key={index} className="relative inline-block text-white text-lg hover:text-blue-900 hover:bg-green-300 px-2 py-1 rounded transition-colors duration-300">
                              {item.label}
                            </Link>
                          )
                        )   
                    }
                    <Link href="/signup" className="bg-rose-600 px-12 py-4 rounded text-white hover:bg-white hover:text-black">
                        Register Now
                    </Link>
                </div>
                <button className="bg-white text-xl w-12 h-12 rounded lg:hidden block">
                    <i className="ri-menu-3-fill"></i>
                </button>
            </nav>


            <div className="py-16 lg:px-24 px-8">
                {children}
            </div>


            {/* footer */}
            <footer className="bg-zinc-700 p-8 grid lg:grid-cols-4 text-white px-lg:24 lg:py-16 lg:gap-0 gap-8">
                <div>
                    <h1 className="text-white text-xl font-semibold">ECommerce</h1>
                    <p className="text-gray-500 mt-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo facilis vero, ullam quas provident. Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                </div>

                <div>
                    <h1 className="text-white text-xl font-semibold">Useful Links</h1>
                    <div className="text-gray-500 mt-3 flex flex-col gap-3">
                        {
                            menus.map((item,index) => (
                                <Link href={item.link} key={index} className="hover:text-white">
                                    <i className={`${item.icon} mr-2`}></i>
                                    {item.label}
                                </Link>
                            ))
                        }
                        <Link href ="/signup" className="hover:text-white">
                            <i className="ri-registered-line mr-2"></i>
                            Register Now
                        </Link>
                    </div>
                </div>

                <div>
                    <h1 className="text-white text-xl font-semibold">Social Media</h1>
                    <div className="text-gray-500 mt-3 flex flex-col gap-3">
                        {
                            socialLinks.map((item,index) => (
                                <Link href={item.link} key={index} className="hover:text-white">
                                    <i className={`${item.icon} mr-2`}></i>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h1 className="text-white text-xl font-semibold">Contact Us</h1>    
                    <form action="" className="text-gray-400 mt-3 flex flex-col gap-5">
                        <input type="text" required className="bg-white p-3 rounded" name="fullname" placeholder="Enter Your Name" />
                        <input type="email" required className="bg-white p-3 rounded"
                        name="email" placeholder="mail@example.com" />
                        <textarea 
                            type="text" 
                            required 
                            className="bg-white p-3 rounded" 
                            name="message" 
                            placeholder="Message"
                            rows={3} 
                        />
                        <button className="bg-rose-600 text-white rounded px-5 py-3 w-fit hover:text-black hover:bg-blue-400">Submit</button>
                    </form>
                </div>
            </footer>
        </div>
    )
}
export default Layout