<template>
  <div class="main">
    <appHeader></appHeader>
    <div class="container" v-if="!projects.length">
      <h2 class="noProjectsMsg">There is no proyects yet, to add please login and click on add project</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <appProjectPreview v-for="project in projects" :project="project"></appProjectPreview>
      </div>
    </div>
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

<style scoped>
  .noProjectsMsg {
    margin-top: 0;
    text-align: center;
  }

  .container-fluid {
    margin-top: 60px;
  }

  .main {
    padding-bottom: 20px;
  }
</style>
