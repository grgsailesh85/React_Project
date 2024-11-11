import Image1 from "../../assets/category/gaming.png"
import Image4 from "../../assets/category/earphone.png"
import Image5 from  "../../assets/category/watch.png"
import Button from "../Shared/Button"
const Category2 = () =>{
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                     {/* first column */}
                     <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Consoles</p>
                                <Button 
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img 
                            src={Image1 } 
                            alt="" 
                            className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
                        />
                    </div>

                    {/* second column */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                                <Button 
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandGreen"}
                                    

                                />
                            </div>
                        </div>
                        <img 
                            src={Image4} 
                            alt="" 
                            className="w-[220px] absolute bottom-0 -right-6"
                        />
                    </div>


                    {/* third column */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Gadget</p>
                                <Button 
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandBlue"}
                                />
                            </div>
                        </div>
                        <img 
                            src={Image5 } 
                            alt="" 
                            className="w-[220px] absolute bottom-4 -right-14"
                        />
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Category2 