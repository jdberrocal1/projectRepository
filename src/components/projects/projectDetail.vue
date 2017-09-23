<template>
  <div class="container-fluid">
    <h3>{{project.title}}</h3>
    <p>{{project.description}}</p>
    <p><b>Requirements: </b></p>
    <ul>
      <li v-for="req in project.requirements">{{req}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created(){
    let project = this.$store.getters.project(this.$route.params.id);
    if(!project){
      this.$router.push({path: '/projects'});
    }
  },
  computed: {
    project() {
      return this.$store.getters.project(this.$route.params.id);
    }
  }
}
</script>

<style>

</style>
