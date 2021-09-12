import React from "react";

import { useGlobalContext } from "../context/context";
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";

const Home = () => {
  const { notes } = useGlobalContext();
  const mainNotes = notes.filter((note) => note.status === "notes");

  return (
    <>
      <CreateNote />
      <NoteList noteItems={mainNotes} />
    </>
  );
};

export default Home;
