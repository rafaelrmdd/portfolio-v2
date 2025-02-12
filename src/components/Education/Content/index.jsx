import Header from "@/components/Header";
import EducationMainImage from "@/assets/education-image.png"
import UdemyLogoImage from "@/assets/udemy-logo.png"
import DioLogoImage from "@/assets/logo.png"
import DegreeItem from "../DegreeItem";
import Image from "next/image";
import CertificationsItem from "../CertificationsItem";

export default function Content() {
    
    const courses = {
        csharp_completo: {
            image: UdemyLogoImage,
            duration: "40 Horas",
            name: "C# Completo",
            platformName: "Udemy",
            text: {
                firstLine: "Certificação avançada em desenvolvimento C#, dominando conceitos fundamentais de orientação a objetos como composição, herança e polimorfismo",
                secondLine: "Aprofundamento em técnicas de programação moderna: LINQ, expressões lambda, delegates e manipulação de coleções",
                thirdLine: "Desenvolvimento de habilidades complexas em programação .NET, com foco em construção de software robusto e escalável"
            }
        },
        web_moderno: {
            image: UdemyLogoImage,
            duration: "100 Horas",
            name: "Curso Web Moderno",
            platformName: "Udemy", 
            text: {
                firstLine: "Curso completo de desenvolvimento web com domínio em tecnologias essenciais: Javascript, Angular, React, Node.js, HTML, CSS e frameworks modernos",
                secondLine: "Construção de múltiplos projetos práticos abrangendo toda stack de desenvolvimento web, demonstrando versatilidade técnica",
                thirdLine: "Certificação em tecnologias front-end e back-end, com ênfase em criar aplicações web responsivas e de alta performance"
            }       
        },
        xp_fullstack: {
            image: DioLogoImage,
            duration: "130 Horas",
            name: "Bootcamp XP Inc. Full Stack Developer",
            platformName: "DIO",
            text: {
                firstLine: "Desenvolvimento de habilidades complexas em programação .NET, com foco em construção de software robusto e escalável",
                secondLine: "Construção de aplicações front-end reais utilizando React, Next.js e TypeScript, com implementação de features complexas e funcionalidades end-to-end",
                thirdLine: "Implementação de soluções cloud na Azure, desenvolvendo projetos que demonstram integração entre infraestrutura, back-end e front-end"
            }         
        }
    }

    return (
        <div className="px-36 w-full h-full max-sm:px-6 max-md:px-6 max-lg:px-6">
            <Header />

            <main className="mt-16 pb-16">
                <div 
                    className="flex justify-between h-[500px] max-sm:block max-sm:relative
                    max-md:block max-md:relative max-lg:block max-lg:relative"
                >
                    <div className="w-[50%] max-sm:w-full max-md:w-full max-lg:w-full">
                        <Image 
                            src={EducationMainImage} 
                            width={424} 
                            height={424} 
                            alt="Four degree hats flying"
                            className="object-fill w-4/5 max-sm:absolute max-sm:bottom-[-150px] max-sm:right-[-3px]
                            max-md:absolute max-md:bottom-[-150px] max-md:right-[60px] max-lg:absolute max-lg:bottom-[-150px] max-lg:right-[190px] max-lg:size-[500px]"
                        />
                    </div>

                    <div className="w-[50%] flex justify-center items-center max-sm:w-full max-md:w-full max-lg:w-full">
                        <h1 className="text-center text-blue-900 text-6xl font-semibold">Formação e Certificações</h1>
                    </div>
                </div>

                {/* Degree */}
                <div className="max-sm:mt-52 max-md:mt-52 max-lg:mt-52">
                    <h2 className="text-5xl text-center text-blue-900">Minha Formação</h2>
                    <DegreeItem />
                </div>

                {/* Certifications */}
                <div className="mt-32">
                    <h2 className="text-5xl text-center text-blue-900">Minhas Certificações</h2>

                    {/* Item */}
                    <CertificationsItem 
                        image={courses.csharp_completo.image}
                        duration={courses.csharp_completo.duration}
                        name={courses.csharp_completo.name}
                        platformName={courses.csharp_completo.platformName}
                        text={courses.csharp_completo.text}
                    />

                    <CertificationsItem 
                        image={courses.web_moderno.image}
                        duration={courses.web_moderno.duration}
                        name={courses.web_moderno.name}
                        platformName={courses.web_moderno.platformName}
                        text={courses.web_moderno.text}
                    />

                    <CertificationsItem 
                        image={courses.xp_fullstack.image}
                        duration={courses.xp_fullstack.duration}
                        name={courses.xp_fullstack.name}
                        platformName={courses.xp_fullstack.platformName}
                        text={courses.xp_fullstack.text}
                    />
                </div>
            </main>
        </div>
    )
}