import { IoMdDownload } from "react-icons/io";

export default function Header() {
    return (
        <header className="flex py-8 justify-between items-center">
            <div className="w-28">
                Logo
            </div>
            <nav className="flex gap-8">
                <a href="/" className="font-bold">Home</a>
                <a href="/projects">Projects</a>
                <a href="/education">Education</a>
                <a href="/contact">Contact</a>
            </nav>

            <button className="flex items-center gap-4 border rounded-lg px-4 py-2">
                Resume
                <IoMdDownload className="w-5 h-5"/>
            </button>
        </header>
    )
}