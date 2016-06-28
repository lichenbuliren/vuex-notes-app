function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}

export const addNote = makeAction('ADD_NOTE');
export const deleteNote = makeAction('DELETE_NOTE');
export const toggleFavorite = makeAction('TOGGLE_FAVORITE');
export const updateActiveNote = makeAction('SET_ACTIVE_NOTE');
// export const updateActiveNote = ({ dispatch }, note, showAll) => {
//   dispatch('SET_ACTIVE_NOTE',note);
//   dispatch('SET_SHOW_ALL',showAll);
// };
export const editNote = makeAction('EDIT_NOTE');
export const updateShowAll = makeAction('SET_SHOW_ALL');
