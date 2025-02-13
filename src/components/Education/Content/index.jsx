import Header from "@/components/Header";
import EducationMainImage from "@/assets/education-main.png"
import DegreeItem from "../DegreeItem";
import Image from "next/image";
import CertificationsItem from "../CertificationsItem";

export default function Content({ courses }) {

    console.log("courses: ", courses)

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
                        <h1 className="text-center text-blue-950 text-6xl font-semibold">Formação e Certificações</h1>
                    </div>
                </div>

                {/* Degree */}
                <div className="max-sm:mt-52 max-md:mt-52 max-lg:mt-52">
                    <h2 className="text-5xl text-center text-blue-950">Minha Formação</h2>
                    <DegreeItem />
                </div>

                {/* Certifications */}
                <div className="mt-32">
                    <h2 className="text-5xl text-center text-blue-950">Minhas Certificações</h2>

                    {/* Item */}
                    <CertificationsItem 
                        image={courses.csharp_completo.image}
                        duration={courses.csharp_completo.duration}
                        name={courses.csharp_completo.name}
                        platformName={courses.csharp_completo.platformName}
                        text={courses.csharp_completo.text}
                    />

                    <CertificationsItem 
                        image="/assets/udemy-logo.png"
                        duration={courses.web_moderno.duration}
                        name={courses.web_moderno.name}
                        platformName={courses.web_moderno.platformName}
                        text={courses.web_moderno.text}
                    />

                    <CertificationsItem 
                        image="/assets/logo.png"
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

