import { getFromStorage } from "@/components/hooks/LocalStorage"
import AddNoteModal from "@/components/AddNoteModal";
import { useEffect, useState } from "react"
import Note from "@/components/Note";

interface UserNotes {
    notes: any
}

function Index() {
    const [notes, setNotes] = useState<UserNotes| null>(null);
    useEffect(() => {
        setNotes({notes: getFromStorage("notes")});
    }, [])
        
    return (
        <>  
            <p className="border-[1px] rounded-lg shadow-md px-4 py-2 mx-6 mt-5">
                Notes are not able to be deleted.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                {(notes?.notes !== null && notes?.notes !== undefined) 
                ? JSON.parse(notes!.notes).map((note:any) => {
                    return (
                        <Note message={note.message} color={note.color} icon={note.icon}></Note>
                    )
                })
                : <div>none</div>}
            </div>
            <AddNoteModal></AddNoteModal>
        </>
    )
}

export default Index;