<template>
  <div class="nav-holder">
    <div class="nav-holder">
      <div><img src="../assets/folder-icon.png" class="folder-icon" /></div>
      <div>FILE MANAGER</div>
    </div>
    <div>{{ currDate }}</div>
  </div>
</template>

<script>
import Moment from "moment";
const formatDate = "D/M/YYYY hh:mm:ss A";

export default {
  name: "NavBar",
  data() {
    return {
      currDate: Moment().format(formatDate),
    };
  },
  mounted() {
    setInterval(() => {
      this.currDate = Moment().format(formatDate);
    }, 1000);
  },
};
</script>

<style scoped>
div {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.nav-holder {
  display: flex;
  justify-content: space-between;
}
.nav-holder div {
  margin: 0.3em;
}
.folder-icon {
  width: 1em;
  height: 1em;
}
</style>