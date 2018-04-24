<template>
  <div class="container">
    <div v-if="!project">
      <h3 class="loading">Loading...</h3>
    </div>
    <div v-if="project">
      <h3>{{project.title}}</h3>
      <div class="project-detail">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-4" v-if="project.mainTechnology">
            <label><b>Main Technology:</b></label>
            <p>{{project.mainTechnology}}</p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4" v-if="project.englishLevel">
            <label><b>English Level: </b></label>
            <p>{{project.englishLevel}}</p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4" v-if="startDate">
            <label><b>Expected Start Date:</b></label>
            <p>{{startDate}}</p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4" v-if="project.yearsOfExperience">
            <label><b>Years of Experience: </b></label>
            <p>{{project.yearsOfExperience}}</p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4" v-if="project.minPosition">
            <label><b>Min Position: </b></label>
            <p>{{project.minPosition}}</p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4" v-if="project.maxPosition">
            <label><b>Max Position: </b></label>
            <p>{{project.maxPosition}}</p>
          </div>
        </div>
        <div class="row" v-if="project.taskDescription">
          <div class="col-xs-12">
            <p><b>Task Description: </b></p>
            <p class="description">{{project.taskDescription}}</p>
          </div>
        </div>
        <div class="row" v-if="project.requirements">
          <div class="col-xs-12">
            <p><b>Requirements: </b></p>
            <p>{{project.requirements}}</p>
          </div>
        </div>
        <div class="row" v-if="project.mandatoryKnowledge && (project.mandatoryKnowledge.hardSkills || project.mandatoryKnowledge.softSkills)">
          <div class="col-xs-12">
            <p><b>Mandatory Knowledge: </b></p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6" v-if="project.mandatoryKnowledge.hardSkills">
            <label><b>Hard Skills: </b></label>
            <p>{{project.mandatoryKnowledge.hardSkills}}</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6" v-if="project.mandatoryKnowledge.softSkills">
            <label><b>Soft Skills: </b></label>
            <p>{{project.mandatoryKnowledge.softSkills}}</p>
          </div>
        </div>
        <div class="row" v-if="project.preferableKnowledge && (project.preferableKnowledge.hardSkills || project.preferableKnowledge.softSkills)">
          <div class="col-xs-12">
            <p><b>Preferable Knowledge: </b></p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6" v-if="project.preferableKnowledge.hardSkills">
            <label><b>Hard Skills: </b></label>
            <p>{{project.preferableKnowledge.hardSkills}}</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6" v-if="project.preferableKnowledge.softSkills">
            <label><b>Soft Skills: </b></label>
            <p>{{project.preferableKnowledge.softSkills}}</p>
          </div>
        </div>
        <div class="row" v-if="project.description">
          <div class="col-xs-12">
            <label><b>Preferable Knowledge: </b></label>
            <p>{{project.description}}</p>
          </div>
        </div>
      </div>
      <div class="row" v-if="isUserLogged">
        <div class="col-xs-12">
          <button class="btn cancel pull-right" @click="sureDelete">Remove Project</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { baseApi } from '../../app.constants';
export default {
  props: ['id', 'projectAux'],
  data() {
    return {
      project: null
    }
  },
  computed:{
    startDate() {
      if (this.project.expectedStartDate) {
        let date = new Date(this.project.expectedStartDate);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      }
      return '';
    },
    isUserLogged() {
      return this.$store.getters.isUserLogged;
    }
  },
  created(){
    if(!this.projectAux){
      this.$Progress.start();
      //TODO: get project by fsId, change api before
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
    } else {
      this.project = this.projectAux;
    }
  },
  methods: {
    sureDelete(){
      this.$alertify.confirmWithTitle('Are you sure?', 'This action will remove the project permanently!', () => {
        this.deleteProject();
      });
    },
    deleteProject(){
      this.$Progress.start();
        axios.delete(`${baseApi}/projects/${this.project.fbId}`)
          .then(response => {
            let data = response.data;
            if (data) {
              this.$router.push({path: '/projects'});
            }
            this.$Progress.finish();
          })
          .catch(error => {
            this.$Progress.fail();
          });
    }
  }
}
</script>

<style scoped>
.project-detail {
  text-align: justify;
  margin-top: 30px;
}

.project-detail .row{
  margin-bottom: 15px;
}
</style>
