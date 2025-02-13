import Content from "@/components/Education/Content";
import UdemyLogoImage from "@/assets/udemy-logo.png"
import DioLogoImage from "@/assets/logo.png"

export default function Education({ courses }) {
    return (
        <div>
            <Content courses={courses}/>
        </div>
    )
}

export async function getStaticProps() {

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

    return {
        props: {
            courses
        }
    }
}