import React from "react";
import { FaTrashAlt, FaTrash, FaArchive, FaTrashRestore } from "react-icons/fa";
import { MdUnarchive } from "react-icons/md";

import { useGlobalContext } from "../context/context";

const Note = ({ id, title, content, status }) => {
  const { toggleTrash, toggleArchive, deleteNote } = useGlobalContext();
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      {status !== "archive" && (
        <div>
          <button onClick={() => toggleTrash(id)}>
            {status === "notes" ? <FaTrashAlt /> : <FaTrashRestore />}
          </button>
          {status === "trash" && (
            <button onClick={() => deleteNote(id)}>
              <FaTrash />
            </button>
          )}
        </div>
      )}
      {status !== "trash" && (
        <button onClick={() => toggleArchive(id)}>
          {status === "notes" ? <FaArchive /> : <MdUnarchive size="18px" />}
        </button>
      )}
    </div>
  );
};

export default Note;
