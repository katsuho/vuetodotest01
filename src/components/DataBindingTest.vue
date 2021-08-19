<template>
  <div class="data-binding-test">
    <h1>データバインディングテスト</h1>
    <div>
      <label for="title">タイトル：</label>
      <input type="text" v-model="title" placeholder="タイトル">
    </div>
    <div>
      <label for="body">内容：</label>
      <textarea v-model="body" placeholder="内容"></textarea>
    </div>
    <div>
      入力されている値－タイトル:{{title}}
    </div>
    <div>
      入力されている値－内　　容:{{body}}
    </div>
    <h2>ToDo一覧</h2>
    <div>
      <input type="submit" value="追加" @click="addList">
    </div>
    <ul v-for="(list, i) in lists" v-bind:key="i">
      <li>id: {{i}}, title: {{ list.title }} body: {{ list.body }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "DataBindingTest",
  data: () => ({
    lists: [
      {title: 'ToDoタイトル１つ目', body: 'ToDo中身１つ目'},
      {title: 'ToDoタイトル２つ目', body: 'ToDo中身２つ目'}
    ],
    title: '',
    body: ''
  }),
  methods: {
    // Todoの追加
    addList: function(){

      this.lists.push({title: this.title, body: this.body})
      this.title = ''
      this.body = ''
    }
  }
});
</script>