import Header from "@/components/Header";
import Image from "next/image";
import ProjectsImage from "@/assets/projects-image.png"
import enterprise_task_manager from "@/assets/enterprise-task-management-landing-page.jpeg"
import r_crypto from "@/assets/r-crypto.jpeg"
import r_burger from "@/assets/r-burger.jpeg"
import r_money from "@/assets/r-money.jpeg"
import ProjectItem from "../ProjectItem";


export default function ProjectsContent() {

    const projects = {
        enterprise_task_manager: {
            image: enterprise_task_manager,
            title: "Enterprise Task Manager",
            technologies: "??? | ??? | ???",
            url: "https://enterprise-task-manager.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam!"
        },
        r_crypto: {
            image: r_crypto,
            title: "rCrypto",
            technologies: "??? | ??? | ???",
            url: "https://rcrypto.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam!"
        },
        r_burger: {
            image: r_burger,
            title: "rBurger",
            technologies: "??? | ??? | ???",
            url: "https://r-burger-shop.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam!"
        },
        r_money: {
            image: r_money,
            title: "Money Control",
            technologies: "??? | ??? | ???",
            url: "https://controlmoneyy.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aperiam!"
        }
    }

    return (
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-16">
                <div className="flex justify-between">
                    {/* Left Card */}
                    <div className="w-[50%]">
                        <Image 
                            src={ProjectsImage} 
                            className="w-full mt-[-115px]" 
                            width={530} 
                            height={530}
                            alt="Guy writing in a blackboard"
                        />
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
                        <ProjectItem 
                            image={projects.r_crypto.image}
                            title={projects.r_crypto.title}
                            technologies={projects.r_crypto.technologies}
                            description={projects.r_crypto.description}
                            url={projects.r_crypto.url}
                            yearOfDevelopment={projects.r_crypto.yearOfDevelopment}
                        />

                        <ProjectItem
                            image={projects.enterprise_task_manager.image}
                            title={projects.enterprise_task_manager.title}
                            technologies={projects.enterprise_task_manager.title}
                            description={projects.enterprise_task_manager.description}
                            url={projects.enterprise_task_manager.url}
                            yearOfDevelopment={projects.enterprise_task_manager.yearOfDevelopment}
                        />

                        <ProjectItem
                            image={projects.r_burger.image}
                            title={projects.r_burger.title}
                            technologies={projects.r_burger.title}
                            description={projects.r_burger.description}
                            url={projects.r_burger.url}
                            yearOfDevelopment={projects.r_burger.yearOfDevelopment}
                        />

                        <ProjectItem
                            image={projects.r_money.image}
                            title={projects.r_money.title}
                            technologies={projects.r_money.title}
                            description={projects.r_money.description}
                            url={projects.r_money.url}
                            yearOfDevelopment={projects.r_money.yearOfDevelopment}
                        />
                    </div>
                </div>

            </main>
        </div>
    )
}