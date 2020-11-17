<template>
  <div>
    <ul v-for="(file, index) in files" :key="index">
      <list-item :item="file"></list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  components: { ListItem },
  name: "FileList",
  data() {
    return {
      files: [
        {
          path: "/a/b/c/i.js",
        },
        {
          path: "/a/b/a",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>