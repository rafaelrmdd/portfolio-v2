import Image from "next/image"

export default function ProjectItem({image, title, technologies, description, url, yearOfDevelopment}) {
    return (
        <div className="rounded-lg border w-[520px]">
            <div>
                <Image 
                    src={image} 
                    className="object-cover" 
                    width={518} 
                    height={241.5}
                    alt="Project landing page"
                />
            </div>

            <div className="p-4">
                <h2 className="text-center font-semibold text-2xl">{title}</h2>
                
                <h3 className="text-center mt-2 text-gray-500 text-xl">{technologies}</h3>

                <h2 className="mt-2 text-2xl font-light">{description}</h2>
        
                <div className="flex justify-between mt-4">
                    <a href={url} className="text-blue-500 text-xl">Visit</a>
                    <span className="text-xl">{yearOfDevelopment}</span>
                </div>
            </div>
        </div>
    )
}