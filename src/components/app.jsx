import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./notes";
import notes from "../notes";

const NoteGen = (note) => (
    <Note 
        key = {note.key}
        title = {note.title}
        content = {note.content}
    />


);

function App(){
    return (
    <div>
    <Header/>
    
        {notes.map(NoteGen)}
        <Footer/>
 
    </div>
    );

}

export default App;