import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../store/actions";

const CreateNote = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.isExpanded);
  const note = useSelector((state) => state.note);

  const addNote = () => {
    dispatch(actions.addNote());
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(actions.createNote({ name, value }));
  };

  const handleClick = () => {
    dispatch(actions.expand());
  };

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
