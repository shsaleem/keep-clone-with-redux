import React from "react";

import { useGlobalContext } from "../context/context";
import NoteList from "./NoteList";

const Archive = () => {
  const { notes } = useGlobalContext();
  const archivedNotes = notes.filter((note) => note.status === "archive");

  return (
    <>
      <h4>{archivedNotes.length} notes in archive</h4>
      <NoteList noteItems={archivedNotes} />
    </>
  );
};

export default Archive;
