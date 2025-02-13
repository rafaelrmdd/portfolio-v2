import LogoImage from "@/assets/letter-r.png"
import Image from "next/image";
import Link from "next/link";

import { IoMdDownload } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {

    const contactUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfK2GA-eE0ILgi0b9NhuQ1DO_0TJ3RIt5EwOjjMBW08Rc8JVw/viewform";

    const [isHidden, setIsHidden] = useState(true)

    const handleClick = () => {
        setIsHidden(!isHidden)
    }

    return (
        <header 
            className="flex py-6 justify-between items-center relative z-[10] 
            max-sm:block max-md:block max-lg:block"
        >
            <div className="w-28 max-sm:w-full max-sm:flex max-md:w-full max-md:flex max-lg:w-full max-lg:flex">
                <div 
                    className="max-sm:w-full max-sm:text-center max-md:w-full max-md:text-center
                    max-lg:w-full max-lg:text-center"
                >

                    <Image src={LogoImage} width={40} height={40} alt=""/>
                </div>

                <button className="hidden max-sm:block max-md:block max-lg:block">
                    <GiHamburgerMenu 
                        onClick={handleClick}
                        className="max-sm:w-5 max-sm:h-5 max-md:w-5 max-md:h-5 max-lg:w-5 max-lg:h-5"
                    />
                </button>
            </div>

            <nav className="flex gap-8 max-sm:gap-2 max-sm:hidden max-md:gap-2 max-md:hidden max-lg:gap-2 max-lg:hidden">
                <Link
                    href="/"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Home
                </Link>

                <Link 
                    href="/projects" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Projects
                </Link>

                <Link 
                    href="/education" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Education
                </Link>

                <Link 
                    href={contactUrl}
                    target="_blank"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Contact
                </Link>
            </nav>

            {/* Only on mobile */}
            <nav 
                className={
                    isHidden ? "hidden max-sm:hidden max-sm:flex-col max-sm:items-center max-sm:mt-6 max-md:hidden max-md:flex-col max-md:items-center max-md:mt-6 max-lg:hidden max-lg:flex-col max-lg:items-center max-lg:mt-6" 
                    : "hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mt-6 max-md:flex max-md:flex-col max-md:items-center max-md:mt-6 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:mt-6"
                }
            >
                <Link 
                    href="/"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Home
                </Link>

                <Link 
                    href="/projects" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Projects
                </Link>


                <Link
                    href="/education" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Education
                </Link>

                <a
                    href={contactUrl}
                    target="_blank"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Contact
                </a>

                <a
                    href="/Currículo FS.pdf"
                    download="Currículo Rafael R"
                    className="flex items-center gap-4 mt-2 border border-blue-900 rounded-lg px-4 py-2 text-blue-900
                    hover:bg-blue-900 hover:text-white duration-300 "
                >
                    Currículo
                    <IoMdDownload className="w-5 h-5"/>
                </a>
            </nav>

            <a
                href="/Currículo FS.pdf"
                download="Currículo Rafael R"
                className="flex items-center gap-4 border border-blue-900 rounded-lg px-4 py-2 text-blue-900
                hover:bg-blue-900 hover:text-white duration-300 max-sm:hidden max-md:hidden max-lg:hidden"
            >
                Currículo
                <IoMdDownload className="w-5 h-5"/>
            </a>
        </header>
    )
}