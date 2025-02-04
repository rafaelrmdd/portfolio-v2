import Header from "@/components/Header";
import GraduationImage from "@/assets/education-image.png"
import UdemyLogoImage from "@/assets/udemy-logo.png"
import DioLogoImage from "@/assets/logo.png"
import DegreeItem from "../DegreeItem";
import Image from "next/image";
import CertificationsItem from "../CertificationsItem";

export default function Content() {

    const courses = {
        csharp_completo: {
            firstLine: "Certificação avançada em desenvolvimento C#, dominando conceitos fundamentais de orientação a objetos como composição, herança e polimorfismo",
            secondLine: "Aprofundamento em técnicas de programação moderna: LINQ, expressões lambda, delegates e manipulação de coleções",
            thirdLine: "Desenvolvimento de habilidades complexas em programação .NET, com foco em construção de software robusto e escalável"
        },
        web_moderno: {
            firstLine: "Curso completo de desenvolvimento web com domínio em tecnologias essenciais: Javascript, Angular, React, Node.js, HTML, CSS e frameworks modernos",
            secondLine: "Construção de múltiplos projetos práticos abrangendo toda stack de desenvolvimento web, demonstrando versatilidade técnica",
            thirdLine: "Certificação em tecnologias front-end e back-end, com ênfase em criar aplicações web responsivas e de alta performance"
        },
        xp_fullstack: {
            firstLine: "Desenvolvimento de habilidades complexas em programação .NET, com foco em construção de software robusto e escalável",
            secondLine: "Construção de aplicações front-end reais utilizando React, Next.js e TypeScript, com implementação de features complexas e funcionalidades end-to-end",
            thirdLine: "Implementação de soluções cloud na Azure, desenvolvendo projetos que demonstram integração entre infraestrutura, back-end e front-end"
        }
    }

    return (
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-16 pb-16">
                <div className="flex justify-between h-[500px]">
                    <div className="w-[50%] ">
                        <Image src={GraduationImage} className="object-fill  w-4/5"/>
                    </div>

                    <div className="w-[50%] flex justify-center items-center">
                        <h1 className="text-center text-blue-900 text-6xl font-semibold">Formação e Certificações</h1>
                    </div>
                </div>

                {/* Degree */}
                <div>
                    <h2 className="text-5xl text-center">Minha Formação</h2>
                    <DegreeItem />
                </div>

                {/* Certifications */}
                <div className="mt-32">
                    <h2 className="text-5xl text-center">Minhas Certificações</h2>

                    {/* Item */}
                    <CertificationsItem 
                        image={UdemyLogoImage}
                        duration="40 Horas"
                        name ="C# Completo"
                        platformName="Udemy"
                        courses={courses.csharp_completo}
                    />

                    <CertificationsItem 
                        image={UdemyLogoImage}
                        duration="100 Horas"
                        name="Curso Web Moderno"
                        platformName="Udemy"
                        courses={courses.web_moderno}
                    />

                    <CertificationsItem 
                        image={DioLogoImage}
                        duration="130 Horas"
                        name="Bootcamp XP Inc. Full Stack Developer"
                        platformName="DIO"
                        courses={courses.xp_fullstack}
                    />
                </div>
            </main>
        </div>
    )
}