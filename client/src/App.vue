<template>
  <div>
    <nav-bar></nav-bar>
    <file-list></file-list>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FileList from "./components/FileList";
export default {
  name: "App",
  components: {
    NavBar,
    FileList,
  },
};
</script>
<style>
body {
  background-color: rgb(247, 247, 247);
}
</style>
