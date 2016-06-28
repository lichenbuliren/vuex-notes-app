<template>
  <div id="note-editor">
    <div class="form-group">
      <input type="text" name="title"
        class="title form-control"
        placeholder="请输入标题"
        @input="updateNote"
        v-model="currentNote.title">
      <textarea
        v-model="currentNote.content" name="content"
        class="form-control" row="3" placeholder="请输入正文"></textarea>
    </div>
  </div>
</template>

<script>
  import { editNote } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        activeNote: state => state.activeNote
      },
      actions: {
        editNote
      }
    },
    computed: {
      currentNote: state => state.activeNote
    },
    methods: {
      updateNote(e) {
        console.log(this.currentNote);
        this.editNote(this.currentNote);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #note-editor {
    height: 100%;
    margin-left: 380px;

    .form-group{
      height: 100%;
    }

    .title{
      border:0;
    }
    textarea{
      height: 100%;
      border: 0;
      border-radius: 0;
      padding-top: 15px;
    }
  }
</style>
