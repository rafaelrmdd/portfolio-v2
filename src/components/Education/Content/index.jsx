import Header from "@/components/Header";
import GraduationImage from "@/assets/education-image.png"
import UnipLogoImage from "@/assets/unip-logo.png"
import Image from "next/image";

export default function Content() {
    return (
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-16 mb-16">
                <div className="flex justify-between h-[500px]">
                    <div className="w-[50%] ">
                        <Image src={GraduationImage} className="object-fill  w-4/5"/>
                    </div>

                    <div className="w-[50%] flex justify-center items-center">
                        <h1 className="text-center text-blue-950 text-6xl font-semibold">Formação e Certificações</h1>
                    </div>
                </div>

                <div>
                    <h2 className="text-5xl text-center">Minha Formação</h2>

                    <div className="flex mt-16">

                        {/* University Logo */}
                        <div className="w-[20%] flex flex-col gap-y-2 justify-center items-center">
                            <Image src={UnipLogoImage} className="w-24 h-16"/>

                            <div>
                                <span className="font-semibold">2022 - 2024</span>
                            </div>
                        </div>

                        <div className="w-[80%]">
                            <h2 className="text-2xl">Análise e Desenvolvimento de Sistemas</h2>
                            <h2 className="text-lg">Universidade Paulista (UNIP)</h2>
                            <h3 className="text-lg">● Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, excepturi.</h3>
                            <h3 className="text-lg">● Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, excepturi.</h3>
                            <h3 className="text-lg">● Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, excepturi.</h3>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}