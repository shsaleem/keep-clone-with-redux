import React from "react";

import { useGlobalContext } from "../context/context";
import NoteList from "./NoteList";

const Trash = () => {
  const { notes } = useGlobalContext();
  const trashedNotes = notes.filter((note) => note.status === "trash");

  return (
    <>
      <h4>{trashedNotes.length} notes in trash</h4>
      <NoteList noteItems={trashedNotes} />
    </>
  );
};

export default Trash;
