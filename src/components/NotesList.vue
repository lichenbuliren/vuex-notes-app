<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | heavenru.com</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleShow('all')"
            :class="{active: show === 'all'}">All Notes</button>
        </div>

        <!-- favorites -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleShow('favorites')"
            :class="{active: show === 'favorites'}">Favorites</button>
        </div>
      </div>
    </div>

    <!-- 渲染笔记列表 -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
         class="list-group-item" href="#"
         @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions';

export default {
  data() {
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote
    }
  },
  computed: {
    filteredNotes() {
      if(this.show === 'all'){
        return this.notes;
      }else if(this.show === 'favorites'){
        return this.notes.filter(note => note.favorite);
      }
    }
  },
  methods: {
    toggleShow(show) {
      this.show = show;
      // TODO, updateActiveNote
    }
  }
}
</script>