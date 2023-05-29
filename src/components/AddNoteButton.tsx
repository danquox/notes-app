import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

function AddNoteButton() {
    return (
        <button className="text-[rgb(80,80,80)] hover:bg-[rgb(250,250,250)] transition-colors duration-100 flex items-center gap-3 border-[1px] rounded-md shadow-md ml-auto py-2 px-4" onClick={e => {
            (document.getElementById("modal-view") as HTMLElement).classList.remove('hidden');
            (document.getElementById("note-modal") as HTMLElement).classList.remove('hidden');
        }}>
            <p className="text-sm">Add Note</p>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
    )
}

export default AddNoteButton;