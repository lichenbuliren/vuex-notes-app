import Vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {}
};

const mutations = {
  ADD_NOTE(state, note) {
    state.notes.push(note);
    state.activeNote = note;
  },
  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },
  DELETE_NOTE(state) {
    state.notes.$remove(state.activeNote);
    state.activeNote = state.note[0];
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_ACTIVE_NOTE(state) {
    state.activeNote = note;
  }
};

export default new Vuex.Store({
  state,
  mutations
});