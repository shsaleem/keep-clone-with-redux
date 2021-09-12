import React from "react";
import { useSelector } from "react-redux";

import CreateNote from "./CreateNote";
import NoteList from "./NoteList";

const Home = () => {
  const notes = useSelector((state) => state.notes);
  const mainNotes = notes.filter((note) => note.status === "notes");

  return (
    <>
      <CreateNote />
      <NoteList noteItems={mainNotes} />
    </>
  );
};

export default Home;
