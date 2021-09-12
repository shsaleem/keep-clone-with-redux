export const EXPANDED = "EXPAND";
export const CREATE_NOTE = "CREATE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const TOGGLE_TRASH = "TOGGLE_TRASH";
export const TOGGLE_ARCHIVE = "TOGGLE_ARCHIVE";
export const DELETE_NOTE = "DELETE_NOTE";
export const HANDLE_SEARCH = "HANDLE_SEARCH";

export const actions = {
  expand() {
    return {
      type: EXPANDED,
    };
  },

  createNote(payload) {
    return {
      type: CREATE_NOTE,
      payload,
    };
  },

  addNote() {
    return {
      type: ADD_NOTE,
    };
  },

  toggleTrash(payload) {
    return {
      type: TOGGLE_TRASH,
      payload,
    };
  },

  toggleArchive(payload) {
    return {
      type: TOGGLE_ARCHIVE,
      payload,
    };
  },

  deleteNote(payload) {
    return {
      type: DELETE_NOTE,
      payload,
    };
  },

  handleSearch(payload) {
    return {
      type: HANDLE_SEARCH,
      payload,
    };
  },
};
