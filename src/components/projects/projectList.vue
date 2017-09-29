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
        <appProjectPreview v-for="project in filteredProjects" :project="project"></appProjectPreview>
      </div>
    </div>
  </div>
</template>

<script>
import projectPreview from './projectPreview.vue';
export default {
  data() {
    return {
      search: ''
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
    filteredProjects() {
      return this.projects.filter(project => {
        return project.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || project.mainTechnology.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      });
    }
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
