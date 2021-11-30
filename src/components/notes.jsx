import React from "react";




function Note(props){
    return(
        <div className="note">
        <h1><code>{props.title}</code></h1>
        <p><code>{props.content}</code></p>

        </div>);
}

export default Note;