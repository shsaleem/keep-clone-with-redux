import * as actions from "./actions";
import { initialState } from "./state";

const keepReducer = (state = initialState, action) => {
  if (action.type === actions.CREATE_NOTE) {
    const { name, value } = action.payload;
    return {
      ...state,
      note: {
        ...state.note,
        [name]: value,
      },
    };
  }

  if (action.type === actions.ADD_NOTE) {
    if (state.note.title && state.note.content) {
      const newNote = { ...state.note, id: new Date().getTime().toString() };
      return {
        ...state,
        notes: [...state.notes, newNote],
        isExpanded: false,
        note: { ...state.note, title: "", content: "" },
      };
    }
  }

  if (action.type === actions.EXPANDED) {
    return {
      ...state,
      isExpanded: true,
    };
  }

  if (action.type === actions.TOGGLE_TRASH) {
    const newNotes = state.notes.map((note) => {
      if (note.id === action.payload) {
        if (note.status === "notes") {
          note.status = "trash";
        } else if (note.status === "trash") {
          note.status = "notes";
        }
      }
      return note;
    });
    return {
      ...state,
      notes: [...newNotes],
    };
  }

  if (action.type === actions.TOGGLE_ARCHIVE) {
    const newNotes = state.notes.map((note) => {
      if (note.id === action.payload) {
        if (note.status === "notes") {
          note.status = "archive";
        } else if (note.status === "archive") {
          note.status = "notes";
        }
      }
      return note;
    });
    return {
      ...state,
      notes: [...newNotes],
    };
  }

  if (action.type === actions.DELETE_NOTE) {
    const newNotes = state.notes.filter((note) => note.id !== action.payload);
    return {
      ...state,
      notes: [...newNotes],
    };
  }

  if (action.type === actions.HANDLE_SEARCH) {
    const filteredNotes = state.notes.filter((note) => {
      if (state.query === "") {
        return note;
      } else if (
        note.title.toLowerCase().includes(state.query.toLowerCase()) ||
        note.content.toLowerCase().includes(state.query.toLowerCase())
      ) {
        return note;
      }
    });
    return {
      ...state,
      query: action.payload,
      notes: [...filteredNotes],
    };
  }

  return state;
};

export default keepReducer;
