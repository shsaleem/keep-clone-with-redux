import React from "react";

import Note from "./Note";

const NoteList = ({ noteItems }) => {
  return (
    <section>
      {noteItems.map((note) => {
        return <Note key={note.id} {...note} />;
      })}
    </section>
  );
};

export default NoteList;
