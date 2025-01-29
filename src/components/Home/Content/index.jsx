import Header from "@/components/Header";
import ImagemTeste from "@/assets/card-image.png"
import Image from "next/image";

export default function Content() {
    return (
        <div className="px-36 bg-cyan-50 w-full h-screen">
            <Header />

            <main className="flex mt-16 justify-between">
                {/* Left Card  */}
                <div className="w-[45%] flex flex-col gap-y-4">
                    <h1 className="text-5xl font-semibold text-blue-950">Rafael Rodrigues</h1>
                    <h2 className="text-3xl font-semibold text-blue-950">( Web Development | API Development | Freelancing )</h2>
                    <h3 className="text-xl font-semibold text-gray-400 leading-[45px]">
                        A results-driven software engineer with expertise in full-stack development
                        of high-quality user-centric solutions in agile environments.
                    </h3>
                </div>

                {/* Right Card */}
                <div className="w-[45%] mb-[-50px]">
                    <Image src={ImagemTeste} alt="teste" className="w-screen h-96"/>
                </div>
            </main>
        </div>
    )
}