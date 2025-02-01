import Header from "@/components/Header";
import Image from "next/image";
import ProjectsImage from "@/assets/projects-image.png"
import LandingPage from "@/assets/website-landing-page.jpeg"

export default function ProjectsContent() {
    return (
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-16">
                <div className="flex justify-between">
                    {/* Left Card */}
                    <div className="w-[50%]">
                        <Image src={ProjectsImage} className="w-full mt-[-115px]"/>
                    </div>

                    {/* Right Card */}
                    <div className="w-[50%] mt-16 flex flex-col items-center">
                        <div>
                            <h1 className="text-center text-blue-950 text-6xl font-semibold">Projects</h1>
                        </div>
                        
                        <div className="mt-6 w-[85%]">
                            <h3 className="text-center text-xl font-semibold text-gray-400 leading-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem aliquid quam voluptatem magnam sed suscipit itaque et necessitatibus repellendus natus, numquam architecto placeat nam eos ab error vitae. Modi iste veritatis sint, vel.</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-14 mb-14">
                    <h2 className="text-center text-blue-950 text-6xl font-semibold">My Projects</h2>

                    {/* Projects Section*/}
                    <div className="mt-12 flex flex-wrap gap-3 items-start">
                        {/* Projects Cards*/}
                        <div className="rounded-lg border w-[520px]">
                            <div className="w-full">
                                <Image src={LandingPage} className="object-cover"/>
                            </div>

                            <div className="p-4">
                                <h2 className="text-center font-semibold text-2xl">Lorem, ipsum.</h2>
                                
                                <h3 className="text-center mt-2 text-gray-500 text-xl">Lorem ipsum dolor sit amet.</h3>

                                <h2 className="mt-2 text-2xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam!</h2>
                        
                                <div className="flex justify-between mt-4">
                                    <a href="" className="text-blue-500 text-xl">Visit</a>
                                    <span className="text-xl">2024</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border w-[520px]">
                            <div>
                                <Image src={LandingPage} className="object-cover"/>
                            </div>

                            <div className="p-4">
                                <h2 className="text-center font-semibold text-2xl">Lorem, ipsum.</h2>
                                
                                <h3 className="text-center mt-2 text-gray-500 text-xl">Lorem ipsum dolor sit amet.</h3>

                                <h2 className="mt-2 text-2xl font-light">Lorem ipsum dolor sit.</h2>
                        
                                <div className="flex justify-between mt-4">
                                    <a href="" className="text-blue-500 text-xl">Visit </a>
                                    <span className="text-xl">2024</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border w-[520px]">
                            <div>
                                <Image src={LandingPage} className="object-cover"/>
                            </div>

                            <div className="p-4">
                                <h2 className="text-center font-semibold text-2xl">Lorem, ipsum.</h2>
                                
                                <h3 className="text-center mt-2 text-gray-500 text-xl">Lorem ipsum dolor sit amet.</h3>

                                <h2 className="mt-2 text-2xl font-light">Lorem ipsum dolor sit.</h2>
                        
                                <div className="flex justify-between mt-4">
                                    <a href="" className="text-blue-500 text-xl">Visit </a>
                                    <span className="text-xl">2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}