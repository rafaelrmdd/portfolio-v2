import ProjectsContent from "@/components/Projects/Content";
import enterprise_task_manager from "@/assets/enterprise-task-management-landing-page.jpeg"
import r_crypto from "@/assets/r-crypto.jpeg"
import r_burger from "@/assets/r-burger.jpeg"
import r_money from "@/assets/r-money.jpeg"
import apiImage from "@/assets/api.png"

export default function Projects({ projects }) {
    return (
        <div>
            <ProjectsContent projects={projects}/>
        </div>
    )
}

export async function getStaticProps() {

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

    return {
        props: {
            projects
        }
    }
}