<template>
  <div class="container-fluid">
    <h3>{{project.title}}</h3>
    <p>{{project.description}}</p>
    <p><b>Requirements: </b></p>
    <p>{{project.requirements}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { baseApi } from '../../app.constants';
export default {
  props: ['id'],
  data() {
    return {
      project: []
    }
  },
  created(){
    this.$Progress.start();
    axios.get(`${baseApi}/projects/${this.$route.params.id}`)
        .then(response => {
          let data = response.data;
          this.project = data;
          if (!project) {
            this.$router.push({path: '/projects'});
          }
          this.$Progress.finish();
        })
        .catch(error => {
          this.$Progress.fail();
        });
  }
}
</script>

<style>

</style>
