<template>
  <li>{{ item.path }}</li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
</style>