import Header from "@/components/Header";
import EducationMainImage from "@/assets/home-main.png"
import WhatIDoCardImage from "@/assets/what-i-do-card.png"
import Image from "next/image";

import { FaGithub, FaLinkedin, FaHtml5, FaCss3,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiSqlite } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";

export default function HomeContent() {

    return (
        <div 
            className="px-36 w-full h-full 
            max-sm:px-6 max-md:px-6 max-lg:px-6"
        >
            <Header />

            <main className="mt-20 pb-16">
                <div className="flex max-sm:block max-md:block max-lg:block">
                    {/* Left Card  */}
                    <div 
                        className="w-[45%] flex flex-col gap-y-4
                        max-sm:w-full max-sm:text-center max-md:w-full max-md:text-center max-lg:w-full max-lg:text-center"
                    >
                        <h1 className="text-5xl font-bold text-blue-950">Rafael Rodrigues</h1>
                        <h2 className="text-4xl font-semibold text-blue-950">Desenvolvimento Full Stack </h2>
                        <h3 className="text-xl font-semibold text-[#7f8daa] leading-[45px]">
                            Desenvolvedor full-stack apaixonado por criar soluções inovadoras e centradas 
                            no usuário. Focado em entregar código limpo, escalável e que gera 
                            impacto real nos negócios.
                        </h3>
                        
                        {/* Redirect Icons */}
                        <div className="flex gap-4 items-center max-sm:justify-center max-md:justify-center max-lg:justify-center">
                            <a 
                                href="https://github.com/rafaelrmdd" 
                                target="_blank" 
                                className="p-4 rounded-full bg-black hover:bg-slate-800"
                            >
                                <FaGithub className="w-8 h-8" color="white"/> 
                            </a>

                            <a 
                                href="https://www.linkedin.com/in/rafaelrmd/" 
                                target="_blank"
                                className="p-4 rounded-full bg-blue-700 hover:bg-blue-600"
                            >
                                <FaLinkedin className="w-8 h-8" color="white"/> 
                            </a>

                            <a 
                                href="mailto:rrodriguesmd17@gmail.com"
                                className="p-4 rounded-full bg-red-600 hover:bg-red-500"
                            >
                                <MdEmail className="w-8 h-8" color="white" /> 
                            </a>
                        </div>  
                    </div>

                    {/* Right Card */}
                    <div className="w-[55%] max-sm:w-full max-sm:mt-[-100px] max-md:w-full max-md:mt-[-100px] max-lg:w-full max-lg:mt-[-100px]">
                        <Image 
                        src={EducationMainImage} 
                        alt="Guy sitting on a chair" 
                        className="w-[650px] h-[650px] absolute top-[-50px] right-[65px]
                        max-sm:static max-sm:top-0 max-sm:right-0 max-md:static max-md:top-0 max-md:right-0 max-lg:static max-lg:top-0 max-lg:right-0"
                    />
                    </div>
                </div>
                
                <div className="w-full mt-36 max-sm:mt-0 max-md:mt-0 max-lg:mt-0">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-5xl font-semibold text-blue-950">O que eu faço?</h1>
                    </div>
                    
                    <div 
                        className="flex justify-between mt-24 
                        max-sm:block max-sm:relative max-md:block max-md:relative max-md:mt-16 max-lg:block max-lg:relative max-lg:mt-16"
                    >
                        {/* Left Card */}
                        <div 
                            className="w-[40%] flex justify-center max-sm:w-full max-sm:absolute max-sm:bottom-[-500px]
                            max-md:w-full max-md:absolute max-md:bottom-[-600px] max-md:right-[10px] max-lg:w-3/4 max-lg:absolute max-lg:bottom-[-620px] max-lg:right-[120px]"
                        >
                            <Image src={WhatIDoCardImage} alt="Full Stack representation" className="object-scale-down "/>
                        </div>

                        {/* Right Card */}
                        <div className="w-[55%] max-sm:w-full max-md:w-full max-lg:w-full">
                            <h2 className="text-4xl font-semibold text-blue-950 text-center">Desenvolvimento Fullstack</h2>

                            {/* Icons */}
                            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-4 items-center justify-center">
                                <div className="p-4 bg-orange-400 rounded-full">
                                    <FaHtml5 className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-blue-400 rounded-full">
                                    <FaCss3 className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-yellow-400 rounded-full">
                                    <IoLogoJavascript className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-teal-400 rounded-full">
                                    <RiTailwindCssFill className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-purple-700 rounded-full">
                                    <TbBrandCSharp className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-blue-800 rounded-full">
                                    <SiDotnet className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-indigo-700 rounded-full">
                                    <BiLogoPostgresql className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-gray-400 rounded-full">
                                    <GrMysql className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-orange-600 rounded-full">
                                    <SiSqlite className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-black rounded-full">
                                    <SiNextdotjs className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-purple-500 rounded-full">
                                    <SiVite className="w-8 h-8" color="white"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 mt-8">
                                <h3 className="text-xl text-[#7f8daa]">
                                    ⭐Especialista em desenvolvimento web full stack com foco em C# (.NET Core), criando APIs RESTful robustas utilizando Entity Framework e PostgreSQL;
                                </h3>

                                <h3 className="text-xl text-[#7f8daa]"> 
                                    ⭐Construção de interfaces modernas e responsivas com React e Next.js, entregando experiências de usuário fluidas e performáticas;
                                </h3>

                                <h3 className="text-xl text-[#7f8daa]">
                                    ⭐Desenvolvedor proativo que constantemente expande conhecimentos através de projetos pessoais e experimentação de novas tecnologias;
                                </h3>

                                <h3 className="text-xl text-[#7f8daa]">
                                    ⭐Domínio em desenvolvimento de sistemas web, com ênfase em soluções escaláveis e arquiteturas modernas;
                                </h3>

                                <h3 className="text-xl text-[#7f8daa]">
                                    ⭐Criação de aplicações end-to-end, integrando back-end robusto com front-end dinâmico e intuitivo.
                                </h3>
                            </div>      
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}