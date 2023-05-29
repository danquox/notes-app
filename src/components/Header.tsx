import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons"
import AddNoteButton from "./AddNoteButton";

function Header() {
    return (
        <header className="flex items-center py-4 px-6 w-full max-w-[800px] h-[75px] mx-auto border-[1px] border-t-0 shadow-sm">
            <span className="flex items-center">
                <FontAwesomeIcon className="text-[rgb(170,170,170)] w-5 h-5 mr-2" icon={faNoteSticky}></FontAwesomeIcon>
                <a className="text-[rgb(100,100,100)] text-xl" href="/">Notes</a>
            </span>
            <AddNoteButton></AddNoteButton>    
        </header>
    )
}

export default Header;