import Heading from "../Shared/Heading"

//image import
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"


const BlogData = [
    {
        title : "How to choose perfect Smartwatch ",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt distinctio adipisci est. Atque itaque, doloremque suscipit iste laudantium ad.",
        published : "Jan 20, 2024 by Er.Sailesh",
        image : Img1,
        aosDelay :"0"
    },
    {
        title : "How to choose perfect Gadget ",
        subtitle : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt beatae aut esse distinctio a, dolorem impedit quisquam unde voluptate!",
        published : "Jan 20, 2024 by Gita Gurung",
        image : Img2,
        aosDelay :"200"
    },
    {
        title : "How to choose perfect VR headset ",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea consequuntur molestias harum dolor ex doloribus? Vel voluptate voluptatibus non animi magni?",
        published : "Jan 20, 2024 by Rashmi Gurung",
        image : Img3,
        aosDelay :"400"
    },
]

const Blogs = () =>{
    return (
        <div className="my-12">
            <div className="container">
                {/* header section  */}
                <Heading 
                    title = "Recent News"
                    subtitle={"Explore Our Blogs"}
                />

                {/* blog section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {/* blog card */}
                    {
                        BlogData.map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}  
                                key={data.title} 
                                className="bg-white dark:bg-gray-900"
                            >
                                {/* image section */}
                                <div className="overflow-hidden rounded-2xl mb-2">
                                    <img 
                                        src={data.image} 
                                        alt=""
                                        className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"  
                                    />
                                </div>

                                {/* content section */}
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500">
                                        {data.published}
                                    </p>
                                    <p className="font-bold line-clamp-1">
                                        {data.title}
                                    </p>
                                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                        {data.subtitle}
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Blogs