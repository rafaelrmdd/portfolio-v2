import Header from "@/components/Header";
import Image from "next/image";
import ProjectsImage from "@/assets/projects-image.png"

export default function ProjectsContent() {
    return (
        <div className="px-36 bg-cyan-50 w-full h-screen">
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

                <div className="mt-14">
                    <h2 className="text-center text-blue-950 text-6xl font-semibold">My Projects</h2>

                    {/* Projects Section*/}
                    <div className="mt-12 flex gap-6 justify-center">
                        {/* Projects Cards*/}
                        <div className="rounded-lg border">
                            <div className="w-full">
                                imagem
                            </div>

                            <div className="w-full h-[50%] p-4">
                                <h2>Lorem, ipsum dolor.</h2>
                                <h3>React Js | React Js | React Js</h3>

                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>
                            </div>
                        </div>
                        <div className="rounded-lg border">
                            <div className="w-full">
                                imagem
                            </div>

                            <div className="w-full h-[50%] p-4">
                                <h2>Lorem, ipsum dolor.</h2>
                                <h3>React Js | React Js | React Js</h3>

                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}