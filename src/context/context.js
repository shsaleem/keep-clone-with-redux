import React, { useEffect, useContext, useReducer } from "react";

import {
  EXPANDED,
  CREATE_NOTE,
  ADD_NOTE,
  TOGGLE_ARCHIVE,
  TOGGLE_TRASH,
  DELETE_NOTE,
  HANDLE_SEARCH,
} from "../actions/actions";

import reducer from "../reducer/reducer";

const KeepContext = React.createContext();

const items = JSON.parse(localStorage.getItem("notes"));

const initialState = {
  note: { title: "", content: "", status: "notes" },
  isExpanded: false,
  notes: items || [],
  query: "",
};

const KeepProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes, state.note.status, state.query]);

  const handleClick = () => {
    dispatch({ type: EXPANDED });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: CREATE_NOTE, payload: { name, value } });
  };

  const addNote = () => {
    if (state.note.title && state.note.content) {
      const newNote = { ...state.note, id: new Date().getTime().toString() };
      dispatch({ type: ADD_NOTE, payload: newNote });
    }
  };

  const toggleTrash = (id) => {
    const newNotes = state.notes.map((note) => {
      if (note.id === id) {
        if (note.status === "notes") {
          note.status = "trash";
        } else if (note.status === "trash") {
          note.status = "notes";
        }
      }
      return note;
    });
    dispatch({ type: TOGGLE_TRASH, payload: newNotes });
  };

  const toggleArchive = (id) => {
    const newNotes = state.notes.map((note) => {
      if (note.id === id) {
        if (note.status === "notes") {
          note.status = "archive";
        } else if (note.status === "archive") {
          note.status = "notes";
        }
      }
      return note;
    });
    dispatch({ type: TOGGLE_ARCHIVE, payload: newNotes });
  };

  const deleteNote = (id) => {
    const newNotes = state.notes.filter((note) => note.id !== id);
    dispatch({ type: DELETE_NOTE, payload: newNotes });
  };

  const handleSearch = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: value });
  };

  return (
    <KeepContext.Provider
      value={{
        ...state,
        handleInput,
        addNote,
        toggleTrash,
        toggleArchive,
        deleteNote,
        handleSearch,
        handleClick,
      }}
    >
      {children}
    </KeepContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(KeepContext);
};

export { KeepContext, KeepProvider };
