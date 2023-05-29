import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faHeart, faCircleXmark, faStar, faSmile } from "@fortawesome/free-solid-svg-icons";
import { getFromStorage, setIntoStorage } from "./hooks/LocalStorage";

function AddNoteModal() {
    const [color, setColor] = useState("blue")
    const [message, setMessage] = useState("Have a nice day!")
    const [icon, setIcon] = useState("none");

    return (
        <div id="modal-view" className="hidden absolute top-0 left-0 flex items-center justify-center bg-black/40 w-screen h-full">
            <div
                id="note-modal"
                className="hidden bg-white w-full max-w-[300px] h-fit rounded-xl p-4"
            >
                <div id="note-preview" className={`relative rounded w-full h-fit min-h-[100px] max-h-[230px] py-2 px-3 pb-7 overflow-scroll ${(color==="blue")?"bg-[rgb(200,220,255)]":(color==="red")?"bg-[rgb(255,200,200)]":"bg-[rgb(200,255,220)]"} shadow-sm transition-colors duration-200`}>
                    <p id="note-preview-message" className="break-words text-[rgb(80,80,80)] bg-transparent w-full h-full">{message}</p>
                    {
                        (icon!=="none") 
                        ? <FontAwesomeIcon className="absolute bottom-0 right-0 m-2.5 text-white" icon={(icon==="heart")?faHeart:(icon==="star")?faStar:faSmile}></FontAwesomeIcon>
                        : null
                    }
                </div>
                <div className="grid grid-cols-3 gap-1 my-3">
                    <button className={`flex items-center gap-2 text-left border-[1px] px-2 py-1 rounded ${(color==="blue")?"border-[rgb(150,170,205)]":""}`} onClick={e=>{setColor("blue")}}>
                        <FontAwesomeIcon className="w-3 h-3 text-[rgb(200,220,255)]" icon={faCircle}></FontAwesomeIcon>
                        <p className="text-sm text-[rgb(80,80,80)]">Blue</p>
                    </button>
                    <button className={`flex items-center gap-2 text-left border-[1px] px-2 py-1 rounded ${(color==="red")?"border-[rgb(205,150,150)]":""}`} onClick={e=>{setColor("red")}}>
                        <FontAwesomeIcon className="w-3 h-3 text-[rgb(255,200,200)]" icon={faCircle}></FontAwesomeIcon>
                        <p className="text-sm text-[rgb(80,80,80)]">Red</p>
                    </button>
                    <button className={`flex items-center gap-2 text-left border-[1px] px-2 py-1 rounded ${(color==="green")?"border-[rgb(150,205,170)]":""}`} onClick={e=>{setColor("green")}}>
                        <FontAwesomeIcon className="w-3 h-3 text-[rgb(200,255,220)]" icon={faCircle}></FontAwesomeIcon>
                        <p className="text-sm text-[rgb(80,80,80)]">Green</p>
                    </button>
                </div>
                <div className="flex flex-col w-full h-fit">
                    <label className="text-[rgb(100,100,100)] text-sm">Message <span className="text-xs text-[rgb(200,200,200)]">Max 200</span></label>
                    <textarea id="user-message" className="text-sm text-[rgb(110,110,110)] border-[1px] rounded outline-none focus:border-[rgb(200,200,200)] p-1.5 resize-none my-2" rows={3} maxLength={200}
                    onFocus={e => {
                        e.target.classList.remove("border-[rgb(255,170,170)]")
                    }}
                    onInput={e => {
                        let userMessage = (e.target as HTMLInputElement).value.trim();
                        if (userMessage === "") {
                            setMessage("Have a nice day!");
                        } else {
                            setMessage(userMessage);
                        }
                    }}></textarea>
                </div>
                <div className="flex flex-col w-full h-fit">
                    <label className="text-[rgb(100,100,100)] text-sm">Icon</label>
                    <div className="flex items-center gap-2 my-2">
                        <button className={`py-0.5 px-1.5 rounded border-[1px] transition-colors duration-200 ${(icon==="none")?"border-[rgb(170,170,170)]":""}`} onClick={e => {setIcon("none")}}>
                            <FontAwesomeIcon className={`transitiion-colors duration-200 ${(icon==="none")?"text-[rgb(150,150,150)]":"text-[rgb(200,200,200)]"}`} icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <button className={`py-0.5 px-1.5 rounded border-[1px] transition-colors duration-200 ${(icon==="heart")?"border-[rgb(170,170,170)]":""}`} onClick={e => {setIcon("heart")}}>
                            <FontAwesomeIcon className={`transitiion-colors duration-200 ${(icon==="heart")?"text-[rgb(150,150,150)]":"text-[rgb(200,200,200)]"}`} icon={faHeart}></FontAwesomeIcon>
                        </button>
                        <button className={`py-0.5 px-1.5 rounded border-[1px] transition-colors duration-200 ${(icon==="star")?"border-[rgb(170,170,170)]":""}`} onClick={e => {setIcon("star")}}>
                            <FontAwesomeIcon className={`transitiion-colors duration-200 ${(icon==="star")?"text-[rgb(150,150,150)]":"text-[rgb(200,200,200)]"}`} icon={faStar}></FontAwesomeIcon>
                        </button>
                        <button className={`py-0.5 px-1.5 rounded border-[1px] transition-colors duration-200 ${(icon==="smile")?"border-[rgb(170,170,170)]":""}`} onClick={e => {setIcon("smile")}}>
                            <FontAwesomeIcon className={`transitiion-colors duration-200 ${(icon==="smile")?"text-[rgb(150,150,150)]":"text-[rgb(200,200,200)]"}`} icon={faSmile}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <button className="border-[1px] text-[rgb(100,100,100)] rounded shadow px-4 py-1 text-sm ml-auto" onClick={e => {
                        // reset
                        document.getElementById('modal-view')?.classList.add("hidden");
                        document.getElementById('note-modal')?.classList.add("hidden");
                        (document.getElementById("user-message") as HTMLInputElement).value = "";
                        setMessage("Have a nice day!");
                        setColor("blue");
                        setIcon("none");
                    }}>Cancel</button>
                    <button className="border-[1px] bg-[rgb(103,174,250)] text-white rounded shadow px-4 py-1 text-sm" onClick={e => {
                        let userMessage = (document.getElementById("user-message") as HTMLInputElement)?.value.trim();
                        if (userMessage === "") {
                            document.getElementById("user-message")?.classList.add("border-[rgb(255,170,170)]");
                            return;
                        }
                        let userNotes = JSON.parse(getFromStorage("notes") || "{}");
                        userNotes.push(
                            {
                                message: message,
                                color: color,
                                icon: icon
                            }
                        )
                        setIntoStorage("notes", JSON.stringify(userNotes));
                        // reset
                        document.getElementById('modal-view')?.classList.add("hidden");
                        document.getElementById('note-modal')?.classList.add("hidden");
                        (document.getElementById("user-message") as HTMLInputElement).value = "";
                        setMessage("Have a nice day!");
                        setColor("blue");
                        setIcon("none");
                    }}>Add Note</button>
                </div>    
            </div>
        </div>
    )
}

export default AddNoteModal