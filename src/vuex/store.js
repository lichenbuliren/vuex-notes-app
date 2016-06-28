import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const note = {
  text: '案例笔记',
  favorite: false
};

const state = {
  notes: [note],
  activeNote: note,
  // 1 表示全部，0表示favorite
  showAll: 1
};

const mutations = {
  ADD_NOTE(state) {
    var newNote = {
      text: 'New note',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },
  DELETE_NOTE(state) {
    state.notes.$remove(state.activeNote);
    state.activeNote = state.notes[0];
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_SHOW_ALL(state, showAll){
    state.showAll = showAll;
    // 过滤数据
    if(!showAll){
      state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
    }else{
      state.activeNote = state.notes[0] || {};
    }
  },
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
