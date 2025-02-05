import Header from "@/components/Header";
import ImagemTeste from "@/assets/card-image.png"
import WhatIDoCardImage from "@/assets/what-i-do-card-image.png"
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
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-20 pb-16">
                <div className="flex">
                    {/* Left Card  */}
                    <div className="w-[45%] flex flex-col gap-y-4">
                        <h1 className="text-5xl font-bold text-blue-900">Rafael Rodrigues</h1>
                        <h2 className="text-4xl font-semibold text-blue-900">Full Stack Development </h2>
                        <h3 className="text-xl font-semibold text-blue-500 leading-[45px]">
                            A results-driven software engineer with expertise in full-stack development
                            of high-quality user-centric solutions in agile environments.
                        </h3>
                        
                        {/* Redirect Icons */}
                        <div className="flex gap-4 items-center">
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
                    <div className="w-[55%]">
                        <Image 
                        src={ImagemTeste} 
                        alt="Guy sitting on a chair" 
                        className="w-[650px] h-[650px] absolute top-[-50px] right-[65px]"
                    />
                    </div>
                </div>
                
                <div className="w-full mt-36">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-5xl font-semibold text-blue-900">O que eu faço?</h1>
                    </div>
                    
                    <div className="flex justify-between mt-24">
                        {/* Left Card */}
                        <div className="w-[40%] flex justify-center">
                            <Image src={WhatIDoCardImage} alt="Full Stack representation" className="object-scale-down "/>
                        </div>

                        {/* Right Card */}
                        <div className="w-[55%]">
                            <h2 className="text-4xl font-semibold text-blue-900 text-center">Desenvolvimento Fullstack</h2>

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
                                <h3 className="text-xl text-blue-500 ">● Especialista em desenvolvimento web full stack com foco em C# (.NET Core), criando APIs RESTful robustas utilizando Entity Framework e PostgreSQL;</h3>
                                <h3 className="text-xl text-blue-500 ">● Construção de interfaces modernas e responsivas com React e Next.js, entregando experiências de usuário fluidas e performáticas;</h3>
                                <h3 className="text-xl text-blue-500 ">● Desenvolvedor proativo que constantemente expande conhecimentos através de projetos pessoais e experimentação de novas tecnologias;</h3>
                                <h3 className="text-xl text-blue-500 ">● Domínio em desenvolvimento de sistemas web, com ênfase em soluções escaláveis e arquiteturas modernas;</h3>
                                <h3 className="text-xl text-blue-500 ">● Criação de aplicações end-to-end, integrando back-end robusto com front-end dinâmico e intuitivo.</h3>
                            </div>      
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}