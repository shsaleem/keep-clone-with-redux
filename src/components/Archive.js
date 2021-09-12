import React from "react";
import { useSelector } from "react-redux";

import NoteList from "./NoteList";

const Archive = () => {
  const notes = useSelector((state) => state.notes);
  const archivedNotes = notes.filter((note) => note.status === "archive");

  return (
    <>
      <h4>{archivedNotes.length} notes in archive</h4>
      <NoteList noteItems={archivedNotes} />
    </>
  );
};

export default Archive;
