<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="updateMessage"
      class="form-control"></textarea>
  </div>
</template>

<script>
  import { editNote } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        activeNoteText: state => state.activeNote.text
      },
      actions: {
        editNote
      }
    },
    methods: {
      updateMessage(e) {
        this.editNote(e.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #note-editor {
    height: 100%;
    margin-left: 380px;

    textarea{
      height: 100%;
      border: 0;
      border-radius: 0;
    }
  }
</style>
