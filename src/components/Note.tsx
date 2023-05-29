import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faSmile } from "@fortawesome/free-solid-svg-icons";

export default function Note({message, color, icon}: {message: string, color: string, icon: string}) {
    return (
        <div className={`relative rounded w-full h-fit min-h-[100px] max-h-[230px] py-2 px-3 pb-7 overflow-scroll ${(color==="blue")?"bg-[rgb(200,220,255)]":(color==="red")?"bg-[rgb(255,200,200)]":"bg-[rgb(200,255,220)]"} shadow-md border-[1px]`}>
            <p className="break-words text-[rgb(80,80,80)] bg-transparent w-full h-full">{message}</p>
            {
                (icon!=="none") 
                ? <FontAwesomeIcon className="absolute bottom-0 right-0 m-2.5 text-white" icon={(icon==="heart")?faHeart:(icon==="star")?faStar:faSmile}></FontAwesomeIcon>
                : null
            }
        </div>
    )
}