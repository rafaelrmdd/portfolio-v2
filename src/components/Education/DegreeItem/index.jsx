import Image from "next/image"
import UnipLogo from "@/assets/unip-logo.png"

export default function DegreeItem() {
    return (
        <div className="flex mt-16">
        
            {/* University Logo */}
            <div className="w-[20%] flex flex-col gap-y-2 justify-center items-center">
                <Image 
                    src={UnipLogo} 
                    className="w-24 h-16"
                    width={96} 
                    height={64} 
                    alt="University Logo"
                />

                <div>
                    <span className="font-semibold">2022 - 2024</span>
                </div>
            </div>

            <div className="w-[80%] max-sm:w-[70%] max-sm:ml-auto">
                <h2 className="text-2xl text-gray-900">Análise e Desenvolvimento de Sistemas</h2>

                <h2 className="text-lg text-gray-900">Universidade Paulista (UNIP)</h2>
                <h3 className="text-lg text-[#7f8daa] mt-2">
                    🎓Graduação em Análise e Desenvolvimento de Sistemas com ênfase em desenvolvimento full-stack e resolução de problemas complexos de software
                </h3>

                <h3 className="text-lg text-[#7f8daa]">
                    🎓Experiência prática em projetos acadêmicos utilizando tecnologias modernas como React, Node.js e metodologias ágeis Scrum
                </h3>

                <h3 className="text-lg text-[#7f8daa]">
                    🎓Domínio em desenvolvimento de sistemas web, mobile e cloud, com foco em criar soluções inovadoras e eficientes para desafios tecnológicos
                </h3>
            </div>
        </div>
    )
}