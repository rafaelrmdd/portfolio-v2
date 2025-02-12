import Image from "next/image"

export default function CertificationsItem({image, duration, name, platformName, text}) {

    return (
        <div className="flex mt-16 ">
            {/* Platform Logo */}
            <div className="w-[20%] flex flex-col gap-y-2 justify-center items-center">
                <Image 
                    src={image}
                    width={96} height={64}
                    alt="Course Platform Logo"
                    className="w-24 h-16"   
                />

                <div>
                    <span className="font-semibold">{duration}</span>
                </div>
            </div>
            <div className="w-[80%] max-sm:w-[70%] max-sm:ml-auto">
                <h2 className="text-2xl text-indigo-800">{name}</h2>
                <h2 className="text-lg text-indigo-800" >{platformName}</h2>
                <h3 className="text-lg text-[#7f8daa] mt-2">
                    <span className="text-blue-900">● </span>
                    {text.firstLine}
                </h3>

                <h3 className="text-lg text-[#7f8daa]">
                    <span className="text-blue-900">● </span>
                    {text.secondLine}
                </h3>

                <h3 className="text-lg text-[#7f8daa]">
                    <span className="text-blue-900">● </span>
                    {text.thirdLine}
                </h3>
            </div>
        </div>
    )
}