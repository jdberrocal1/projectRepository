<template>
    <div>
        <appHeader></appHeader>
        <div class="container">
          <h2>Project List</h2>
          <h5>This will be empty for a while</h5>
        </div>
        <appProjectPreview v-for="project in projects" :project="project"></appProjectPreview>
    </div>
</template>

<script>
import header from './header.vue';
import projectPreview from './projects/projectPreview.vue';
export default {
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  },
  components: {
    appHeader: header,
    appProjectPreview: projectPreview
  }
}
</script>

<style>

</style>
