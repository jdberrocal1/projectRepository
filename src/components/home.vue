<template>
    <div >
        <appHeader></appHeader>
        <h1>Project List</h1>
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

<style>

</style>
