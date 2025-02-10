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
            max-sm:block "
        >
            <div className="w-28 max-sm:w-full max-sm:flex">
                <div className="max-sm:w-full max-sm:text-center">
                    Logo
                </div>

                <button className="hidden max-sm:block">
                    <GiHamburgerMenu 
                        onClick={handleClick}
                        className="max-sm:w-5 max-sm:h-5"
                    />
                </button>
            </div>

            <nav className="flex gap-8 max-sm:gap-2 max-sm:hidden">
                <a 
                    href="/"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Home
                </a>

                <a 
                    href="/projects" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Projects
                </a>

                <a 
                    href="/education" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Education
                </a>

                <a 
                    href={contactUrl}
                    target="_blank"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Contact
                </a>
            </nav>

            {/* Only on mobile */}
            <nav 
                className={
                    isHidden ? "hidden max-sm:hidden max-sm:flex-col max-sm:items-center max-sm:mt-6" 
                    : "hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mt-6"
                }
            >
                <a 
                    href="/"
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Home
                </a>

                <a 
                    href="/projects" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Projects
                </a>

                <a 
                    href="/education" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Education
                </a>

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
                hover:bg-blue-900 hover:text-white duration-300 max-sm:hidden"
            >
                Currículo
                <IoMdDownload className="w-5 h-5"/>
            </a>
        </header>
    )
}