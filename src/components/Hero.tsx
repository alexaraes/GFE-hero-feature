import { RiCheckboxCircleFill, RiCheckLine } from "react-icons/ri";

const Hero = () => {
    return (
        <div className="m-4 bg-slate-100 rounded-lg w-full h-11/12">
            <div className="mt-16 mx-8">
                <p className="text-4xl font-semibold">Premium abstract images</p>
                <ul className="flex flex-col gap-4 my-8 md:my-16">
                    <li className="text-lg text-neutral-600 flex items-center gap-x-3">
                        <RiCheckLine
                            color="#6366F1"
                            className="rounded-full bg-indigo-50 my-auto"
                        />
                        Minimum 5k image resolution
                    </li>
                    <li className="text-lg text-neutral-600 flex items-center gap-x-3">
                        <RiCheckLine
                            color="#6366F1"
                            className="rounded-full bg-indigo-50 my-auto"
                        />
                        Various format variants available
                    </li>
                    <li className="text-lg text-neutral-600 flex items-center gap-x-3">
                        <RiCheckLine
                            color="#6366F1"
                            className="rounded-full bg-indigo-50 my-auto"
                        />
                        Retina display support
                    </li>
                </ul>
                <img src="prism.png" />
            </div>
        </div>
    )
}

export default Hero;