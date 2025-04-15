import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function notesContent(props){
    return <Note key={props.id} title={props.title} content={props.content}/>;
}

function App(){
    return (<div>
        <Header />

        {notes.map(notesContent)}

        <Footer />
    </div>);
}

export default App;