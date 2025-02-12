import Header from "@/components/Header";
import Image from "next/image";
import ProjectsImage from "@/assets/projects.png"
import enterprise_task_manager from "@/assets/enterprise-task-management-landing-page.jpeg"
import r_crypto from "@/assets/r-crypto.jpeg"
import r_burger from "@/assets/r-burger.jpeg"
import r_money from "@/assets/r-money.jpeg"
import apiImage from "@/assets/api.png"
import ProjectItem from "../ProjectItem";
import ProjectItemApi from "../ProjectItemApi";

export default function ProjectsContent() {

    const projects = {
        enterprise_task_manager: {
            image: enterprise_task_manager,
            title: "Enterprise Task Manager",
            technologies: "React | Javascript | Next Js | Tailwindcss | Axios | Supabase",
            url: "https://enterprise-task-manager.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Sistema de gerenciamento empresarial fullstack que permite administrar projetos, tarefas e equipes em uma interface moderna e intuitiva, com dashboard analítico de produtividade. Desenvolvido com React, Next.js, Tailwind CSS e Supabase."
        },
        r_crypto: {
            image: r_crypto,
            title: "rCrypto",
            technologies: "React | Javascript | Styled Components | Axios",
            url: "https://rcrypto.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Plataforma que permite aos usuários acompanhar em tempo real suas criptomoedas favoritas, com dados precisos e atualizados da CoinGecko. Desenvolvido com React, styled-components e integração via API externa."
        },
        r_burger: {
            image: r_burger,
            title: "rBurger",
            technologies: "React | Next Js | Tailwindcss",
            url: "https://r-burger-shop.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Landing page de uma hamburgueria. Desenvolvido com React e styled-components."
        },
        r_money: {
            image: r_money,
            title: "Money Control",
            technologies: "React | Styled Components | Axios | Supabase",
            url: "https://controlmoneyy.netlify.app/",
            yearOfDevelopment: "2024",
            description: "Sistema de controle financeiro pessoal que permite gerenciar entradas e saídas com cálculo automático de saldo, proporcionando uma visão clara da sua saúde financeira. Desenvolvido com React, styled-components e Supabase."
        },
        enterprise_task_manager_api: {
            image: apiImage,
            title: "Enterprise Task Management API",
            technologies: "C# | .NET Core | Entity Framework | PostgreSQL",
            url: "https://github.com/rafaelrmdd/EnterpriseTaskManagerAPI",
            yearOfDevelopment: "2024",
            description: "API robusta desenvolvida em .NET Core para gerenciamento completo de projetos empresariais, oferecendo endpoints para manipulação de projetos, tarefas e membros através de operações CRUD. Construída com C#, .NET Core, Entity Framework, documentada com Swagger e utilizando PostgreSQL como banco de dados."
        }
    }

    return (
        <div className="px-36 w-full h-full max-sm:px-6 max-md:px-6 max-lg:px-6">
            <Header />

            <main className="mt-16">
                <div 
                    className="flex justify-between max-sm:justify-center max-sm:block max-md:justify-center max-md:block
                    max-lg:justify-center max-lg:block"
                >
                    {/* Left Card */}
                    <div className="w-[50%]">
                        <Image 
                            src={ProjectsImage} 
                            width={530} 
                            height={530}
                            alt="Guy writing in a blackboard"
                            className="w-full mt-[-50px] max-sm:absolute max-sm:bottom-[-550px]
                            max-md:absolute max-md:bottom-[-600px] max-lg:absolute max-lg:bottom-[-700px]" 
                        />
                    </div>

                    {/* Right Card */}
                    <div className="w-[50%] mt-10 flex flex-col items-center max-sm:w-full max-md:w-full max-lg:w-full">
                        <div>
                            <h1 className="text-center text-blue-950 text-6xl font-semibold">Projetos</h1>
                        </div>
                        
                        <div className="mt-6 w-[85%]">
                            <h3 className="text-center text-xl font-semibold text-[#7f8daa] leading-[30px]">Desenvolvo projetos pessoais com o objetivo de resolver problemas reais e aprimorar minhas habilidades técnicas. Cada projeto representa um desafio único que me permitiu explorar diferentes tecnologias e aperfeiçoar minhas competências em desenvolvimento de software. Abaixo, você encontrará uma seleção dos meus principais projetos, demonstrando minha capacidade de criar soluções completas e funcionais.</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-14 mb-14 max-sm:mt-[470px] max-md:mt-[570px] max-lg:mt-[670px]">
                    <h2 className="text-center text-blue-950 text-6xl font-semibold">Meus Projetos</h2>

                    {/* Projects Section*/}
                    <div 
                        className="mt-12 flex flex-wrap gap-3 items-start max-sm:flex max-sm:justify-center
                        max-md:flex max-md:justify-center max-lg:flex max-lg:justify-center"
                    >
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
                            technologies={projects.enterprise_task_manager.technologies}
                            description={projects.enterprise_task_manager.description}
                            url={projects.enterprise_task_manager.url}
                            yearOfDevelopment={projects.enterprise_task_manager.yearOfDevelopment}
                        />

                        <ProjectItem
                            image={projects.r_burger.image}
                            title={projects.r_burger.title}
                            technologies={projects.r_burger.technologies}
                            description={projects.r_burger.description}
                            url={projects.r_burger.url}
                            yearOfDevelopment={projects.r_burger.yearOfDevelopment}
                        />

                        <ProjectItem
                            image={projects.r_money.image}
                            title={projects.r_money.title}
                            technologies={projects.r_money.technologies}
                            description={projects.r_money.description}
                            url={projects.r_money.url}
                            yearOfDevelopment={projects.r_money.yearOfDevelopment}
                        />

                        <ProjectItemApi
                            image={projects.enterprise_task_manager_api.image}
                            title={projects.enterprise_task_manager_api.title}
                            technologies={projects.enterprise_task_manager_api.technologies}
                            description={projects.enterprise_task_manager_api.description}
                            url={projects.enterprise_task_manager_api.url}
                            yearOfDevelopment={projects.enterprise_task_manager_api.yearOfDevelopment}
                        />
                    </div>
                </div>

            </main>
        </div>
    )
}