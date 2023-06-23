import NewNote,{links as NewNoteLinks} from "~/components/NewNote";
import NoteList, {links as NoteListLinks} from "~/components/NoteList"
import { getStoredNotes, storeNotes } from "../data/notes";
import { redirect } from "@remix-run/node";

export default function NotesPage() {
    return (
      <main>
        <NewNote />
        <NoteList />
      </main>
    );
  }

  export async function action({request}){
   const formData=await request.formData()
  const noteData= Object.fromEntries(formData)
  //Add Validation
  const existingNotes=await getStoredNotes();
  noteData.id=new Date().toISOString();
   const updatedNotes=existingNotes.concat(noteData);
   await storeNotes(updatedNotes);
    return redirect('/notes');
  }

  export function links()
  {
    return [...NewNoteLinks(),...NoteListLinks()]
  }