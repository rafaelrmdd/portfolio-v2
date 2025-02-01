import Header from "@/components/Header";
import GraduationImage from "@/assets/education-image.png"
import Image from "next/image";

export default function Content() {
    return (
        <div className="px-36 bg-cyan-50 w-full h-full">
            <Header />

            <main className="mt-16">
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
                        <div className="w-[20%]">
                            Logo
                        </div>

                        <div className="w-[80%]">
                            aaaaa
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}