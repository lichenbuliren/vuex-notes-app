import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const note = {
  id: +new Date(),
  title: 'default title',
  content: 'default content',
  favorite: false
};

const state = {
  notes: [],
  activeNote: {},
  show: ''
};

const mutations = {
  INIT_STORE(state, data) {
    state.notes = data.notes,
    state.show = data.show;
    state.activeNote = data.activeNote;
  },
  NEW_NOTE(state) {
    var newNote = {
      id: +new Date(),
      title: '请输入标题',
      content: '请输入内容',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE(state, note) {
    state.activeNote = note;
    state.show = 'all';
    for (var i = 0; i < state.notes.length; i++) {
      if(state.notes[i].id === note.id){
        state.notes[i] = note;
        break;
      }
    }
  },
  DELETE_NOTE(state) {
    state.notes.$remove(state.activeNote);
    state.activeNote = state.notes[0];
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_SHOW_ALL(state, show){
    state.show = show;
    // 过滤数据
    if(show === 'favorite'){
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
