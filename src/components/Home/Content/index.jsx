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

export default function HomeContent() {
    return (
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-16">
                <div className="flex justify-between">
                    {/* Left Card  */}
                    <div className="w-[45%] flex flex-col gap-y-4">
                        <h1 className="text-5xl font-semibold text-blue-950">Rafael Rodrigues</h1>
                        <h2 className="text-3xl font-semibold text-blue-950">( Web Development | API Development | Freelancing )</h2>
                        <h3 className="text-xl font-semibold text-gray-400 leading-[45px]">
                            A results-driven software engineer with expertise in full-stack development
                            of high-quality user-centric solutions in agile environments.
                        </h3>
                        
                        {/* Redirect Icons */}
                        <div className="flex gap-4 items-center">
                            <a href="/"> <FaGithub className="w-10 h-10" /> </a>
                            <a href="/"> <FaLinkedin className="w-10 h-10" /> </a>
                            <a href="mailto:rrodriguesmd17@gmail.com"> <MdEmail className="w-12 h-12" /> </a>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="w-[45%] mb-[-50px]">
                        <Image src={ImagemTeste} alt="teste" className="w-full h-96"/>
                    </div>
                </div>
                
                <div className="w-full mt-28">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-5xl font-semibold text-blue-950">O que eu faço?</h1>
                    </div>
                    
                    <div className="flex justify-between mt-24">
                        {/* Left Card */}
                        <div className="w-[40%]">
                            <Image src={WhatIDoCardImage} alt="teste" className="w-full "/>
                        </div>

                        {/* Right Card */}
                        <div className="w-[55%]">
                            <h2 className="text-4xl font-semibold text-blue-950 text-center">Desenvolvimento Fullstack</h2>

                            {/* Icons */}
                            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-8 items-center justify-center">
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <FaHtml5 className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <FaCss3 className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <IoLogoJavascript className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <RiTailwindCssFill className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <TbBrandCSharp className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <SiDotnet className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <SiDotnet className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <SiDotnet className="w-8 h-8" color="white"/>
                                </div>
                                <div className="p-4 bg-slate-600 rounded-full">
                                    <SiDotnet className="w-8 h-8" color="white"/>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-3xl text-gray-400">● Icon Lorem ipsum dolor sit amet.</h3>
                                <h3 className="text-3xl text-gray-400">● Icon Lorem ipsum dolor sit amet.</h3>
                                <h3 className="text-3xl text-gray-400">● Icon Lorem ipsum dolor sit amet.</h3>
                                <h3 className="text-3xl text-gray-400">● Icon Lorem ipsum dolor sit amet.</h3>
                            </div>      
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}