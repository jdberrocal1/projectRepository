<template>
  <div class="container-fluid">
    <h3>{{project.title}}</h3>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-3">
        <p><b>Main Technology: </b> {{project.mainTechnology}}</p>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-3">
        <p><b>English Level: </b> {{project.englishLevel}}</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <p><b>Min Position: </b> {{project.minPosition}}</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3" v-if="project.maxPosition">
        <p><b>Max Position: </b> {{project.maxPosition}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <p><b>Task Description: </b></p>
        <p class="description">{{project.taskDescription}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <p><b>Requirements: </b></p>
        <p>{{project.requirements}}</p>
      </div>
    </div>
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
  computed:{
    startDate() {
      if (this.project.expectedStartDate) {
        let date = new Date(this.project.expectedStartDate);
        return `${date.getDate()}/${date.getMoth()}/${date.getFullYear()}`;
      }
      return '';
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

<style scoped>
.description {
  text-align: justify;
}
</style>
