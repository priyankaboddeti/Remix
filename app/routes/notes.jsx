import NewNote,{links as NewNoteLinks} from "~/components/NewNote";
import NoteList, {links as NoteListLinks} from "~/components/NoteList"
import { getStoredNotes, storeNotes } from "../data/notes";
import { json, redirect } from "@remix-run/node";
import {useCatch,Link, useLoaderData, useRouteError, isRouteErrorResponse} from "@remix-run/react"

export default function NotesPage() {
  const notes=useLoaderData()
    return (
      <main>
        <NewNote />
        <NoteList notes={notes}/>
      </main>
    );
  }

  //Fetch the Data from backend
  export async function loader(){
  const notes= await getStoredNotes()
  console.log(notes.length)
  if(!notes || notes.length===0)
  {
    throw json({
      message:'Could not find any notes.'
    },{
      status:404,
      statusText:'Not Found'
    });
  }
  return notes;
  }

  //send tha data to backend by hitting on Submit Button
  export async function action({request}){
   const formData=await request.formData()
  const noteData= Object.fromEntries(formData)

  //Add Validation
  if(noteData.title.trim().length<5)
  {
    return {message:'Invalid title - must be at least 5 characters long '}
  }



  const existingNotes=await getStoredNotes();
  noteData.id=new Date().toISOString();
   const updatedNotes=existingNotes.concat(noteData);
   await storeNotes(updatedNotes);
  //  await new Promise((resolve,reject)=>setTimeout(()=>resolve(),2000))
    return redirect('/notes');
  }

  export function links()
  {
    return [...NewNoteLinks(),...NoteListLinks()]
  }

  
  export function ErrorBoundary() {
    const error = useRouteError();
  
    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
      return (
        <div>
            <NewNote />
        {/* <h1 className="info-message">Oops</h1>
        <p className="info-message">Status: {error.status}</p> */}
        <p className="info-message">{error.data.message}</p>
      </div>
      );
    }
  }
  