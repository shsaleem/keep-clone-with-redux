import React from "react";

import { useSelector } from "react-redux";
import NoteList from "./NoteList";

const Trash = () => {
  const notes = useSelector((state) => state.notes);
  const trashedNotes = notes.filter((note) => note.status === "trash");

  return (
    <>
      <h4>{trashedNotes.length} notes in trash</h4>
      <NoteList noteItems={trashedNotes} />
    </>
  );
};

export default Trash;
