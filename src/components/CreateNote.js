import React from "react";

import { useGlobalContext } from "../context/context";

const CreateNote = () => {
  const { isExpanded, note, handleInput, addNote, handleClick } =
    useGlobalContext();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {isExpanded && (
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={handleInput}
          />
        )}

        <p>
          <textarea
            name="content"
            placeholder="Take a note..."
            value={note.content}
            onChange={handleInput}
            onClick={handleClick}
          ></textarea>
        </p>
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;
