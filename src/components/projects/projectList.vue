<template>
  <div>
    <div class="container-fluid" v-if="!projects.length">
      <h2 class="noProjectsMsg">There is no proyects yet, to add please login and click on add project</h2>
    </div>
    <div class="container-fluid">
      <div class="row searchContainer">
        <div class="col-xs-12">
          <div id="custom-search-input">
            <div class="input-group col-md-12">
              <input type="text" class="form-control input-lg searchInput" placeholder="Search" v-model="search" />
              <span class="input-group-btn">
                <button class="btn btn-lg" type="button">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <appProjectPreview v-for="project in filteredProjects" :project="project" :key="project.id"></appProjectPreview>
      </div>
    </div>
  </div>
</template>

<script>
import projectPreview from './projectPreview.vue';
import axios from 'axios';
import { baseApi } from '../../app.constants';

export default {
  data() {
    return {
      search: '',
      projects: []
    }
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        return project.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by title
                project.mainTechnology.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by mainTechnology
                project.maxPosition.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by maxPosition
                project.minPosition.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by minPosition
                project.requirements.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by requirements
                project.client.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by client
                project.office.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || // search by client
                project.englishLevel.toLowerCase().indexOf(this.search.toLowerCase()) > -1 // search by englishLevel
      });
    }
  },
  created() {
    this.$Progress.start();
    axios.get(`${baseApi}/projects`)
        .then(response => {
          let data = response.data;
          this.projects = data;
          this.$Progress.finish();
        })
        .catch(error => {
          this.$Progress.fail();
        });
  },
  components: {
    appProjectPreview: projectPreview
  }
}
</script>

<style>
.noProjectsMsg {
  margin-top: 0;
  text-align: center;
}

.searchContainer>div {
  z-index: 1;
}

.searchContainer .searchInput {
  border-radius: 0;
  border-color: #2F2D46;
  color: #2F2D46;
  border-right: 0;
}

.searchContainer .input-group-btn>button {
  border-radius: 0;
  background-color: #EF4023;
  color: white;
}
</style>
