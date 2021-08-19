<template>
  <div id="app">
    <!-- comment out
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    -->
    <!-- add start -->
    <DataBindingTest />
    <!-- add end -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// comment out
//import HelloWorld from './components/HelloWorld.vue';
// add start 
import TodoList from "./components/TodoList.vue";
import DataBindingTest from "./components/DataBindingTest.vue";
// add end

@Component({
  components: {
    //HelloWorld, // comment out
    TodoList,
    DataBindingTest,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
