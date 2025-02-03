import Image from "next/image"

export default function CertificationsItem({image, duration, name, platformName, courses}) {

    console.log('platformObject: ', courses)

    return (
        <div className="flex mt-16">
            {/* Platform Logo */}
            <div className="w-[20%] flex flex-col gap-y-2 justify-center items-center">
                <Image src={image} className="w-24 h-16"/>

                <div>
                    <span className="font-semibold">{duration}</span>
                </div>
            </div>
            <div className="w-[80%]">
                <h2 className="text-2xl">{name}</h2>
                <h2 className="text-lg">{platformName}</h2>
                <h3 className="text-lg">● {courses.firstLine}</h3>
                <h3 className="text-lg">● {courses.secondLine}</h3>
                <h3 className="text-lg">● {courses.thirdLine}</h3>
            </div>
        </div>
    )
}