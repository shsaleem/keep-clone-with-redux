import React from "react";
import { useDispatch } from "react-redux";

import { FaTrashAlt, FaTrash, FaArchive, FaTrashRestore } from "react-icons/fa";
import { MdUnarchive } from "react-icons/md";

import { actions } from "../store/actions";

const Note = ({ id, title, content, status }) => {
  const dispatch = useDispatch();

  const toggleTrash = () => {
    dispatch(actions.toggleTrash(id));
  };

  const toggleArchive = () => {
    dispatch(actions.toggleArchive(id));
  };

  const deleteNote = () => {
    dispatch(actions.deleteNote(id));
  };

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
