export const filteredNotes = (state) => {
  if(state.show === 'all'){
    return state.notes;
  }else if(state.show === 'favorite'){
    return state.notes.filter(note => note.favorite);
  }
};
