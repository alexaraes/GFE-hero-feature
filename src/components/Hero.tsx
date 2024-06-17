import { RiCheckboxCircleFill, RiCheckLine } from "react-icons/ri";

const Hero = () => {
    return (
        <div className="m-4 bg-white rounded-md w-full h-11/12">
            <div className="flex flex-col mt-10 mx-6 sm:mt-20 lg:flex-row">
                <div className="md:w-3/6">
                    <p className="text-4xl font-semibold sm:text-5xl">Premium abstract images</p>
                    <ul className="flex flex-col gap-4 my-8">
                        <li className="text-lg text-slate-500 flex items-center gap-x-3 sm:text-xl">
                            <RiCheckLine
                                color="#6366F1"
                                className="rounded-full bg-indigo-50 my-auto"
                            />
                            Minimum 5k image resolution
                        </li>
                        <li className="text-lg text-slate-500 flex items-center gap-x-3 sm:text-xl">
                            <RiCheckLine
                                color="#6366F1"
                                className="rounded-full bg-indigo-50 my-auto"
                            />
                            Various format variants available
                        </li>
                        <li className="text-lg text-slate-500 flex items-center gap-x-3 sm:text-xl">
                            <RiCheckLine
                                color="#6366F1"
                                className="rounded-full bg-indigo-50 my-auto"
                            />
                            Retina display support
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between mb-6 sm:justify-start sm:gap-5 sm:mb-10">
                        <button className="bg-white text-black text-md shadow-sm shadow-neutral-300 h-14 w-40 rounded-md">Learn More</button>
                        <button className="bg-indigo-500 text-white text-md shadow-sm shadow-neutral-300 h-14 w-40 rounded-md">See Pricing</button>
                    </div>
                </div>
                <div className="md:w-3/6">
                    <img src="prism.png" />
                </div>
            </div>
        </div>
    )
}

export default Hero;