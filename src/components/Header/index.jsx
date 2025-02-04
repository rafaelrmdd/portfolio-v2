import { IoMdDownload } from "react-icons/io";

export default function Header() {
    return (
        <header className="flex py-6 justify-between items-center relative z-[10]">
            <div className="w-28">
                Logo
            </div>

            <nav className="flex gap-8">
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
                    href="/contact" 
                    className="font-medium text-blue-900 py-2 px-4 hover:bg-blue-300 rounded-md duration-300"
                >
                    Contact
                    </a>
            </nav>

            <button 
                className="flex items-center gap-4 border border-blue-900 rounded-lg px-4 py-2 text-blue-900"
            >
                Resume
                <IoMdDownload className="w-5 h-5"/>
            </button>
        </header>
    )
}