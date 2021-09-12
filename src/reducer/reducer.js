import {
  EXPANDED,
  CREATE_NOTE,
  ADD_NOTE,
  TOGGLE_ARCHIVE,
  TOGGLE_TRASH,
  DELETE_NOTE,
  HANDLE_SEARCH,
} from "../actions/actions";

const reducer = (state, action) => {
  if (action.type === CREATE_NOTE) {
    const { name, value } = action.payload;
    return {
      ...state,
      note: {
        ...state.note,
        [name]: value,
      },
    };
  }

  if (action.type === ADD_NOTE) {
    return {
      ...state,
      notes: [...state.notes, action.payload],
      isExpanded: false,
      note: { ...state.note, title: "", content: "" },
    };
  }

  if (action.type === EXPANDED) {
    return {
      ...state,
      isExpanded: true,
    };
  }

  if (action.type === TOGGLE_TRASH) {
    return {
      ...state,
      notes: [...action.payload],
    };
  }

  if (action.type === TOGGLE_ARCHIVE) {
    return {
      ...state,
      notes: [...action.payload],
    };
  }

  if (action.type === DELETE_NOTE) {
    return {
      ...state,
      notes: [...action.payload],
    };
  }

  if (action.type === HANDLE_SEARCH) {
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

  throw new Error("Dont match any action type");
};

export default reducer;
