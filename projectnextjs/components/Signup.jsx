const Signup = () =>{
    return(
        <div className="bg-gray-200 h-screen flex items-end justify-center">
            <div className="bg-white w-6/12 rounded-t-2xl shadow-xl relative">
                <div className="px-12 py-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-t-2xl">
                    <h1 className="text-center font-semibold text-4xl">Register Now</h1>
                    <form action="" className="space-y-6">

                        <div className="flex flex-col  ">
                            <label htmlFor="" className="text-white mb-2 font-medium text-lg">
                                Full Name
                            </label>
                            <input
                                className="p-3 rounded"
                                placeholder="Full-Name"
                                required
                                name="fullname"
                                type="text"
                            />
                        </div>

                        <div className="flex flex-col  ">
                            <label htmlFor="" className="text-white mb-2 font-medium text-lg">
                                Username
                            </label>
                            <input
                                className="p-3 rounded"
                                placeholder="username@gmail.com"
                                required
                                name="username"
                                type="email"
                            />
                        </div>

                        <div className="flex flex-col  ">
                            <label htmlFor="" className="text-white mb-2 font-medium text-lg">
                                Username
                            </label>
                            <input
                                className="p-3 rounded"
                                placeholder="*********"
                                required
                                name="password"
                                type="password"
                            />
                        </div>

                        <button className="bg-zinc-950 px-6 py-3 rounded text-white hover:bg-white hover:text-black">
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup