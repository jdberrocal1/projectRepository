<template>
  <div class="main">
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './header.vue';
export default {
  components: {
    appHeader: header
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 20px;
}

.main > div {
   margin-top: 60px;
}
</style>
