<template>
  <div>
    <div class="container" v-if="!existProject">
      <h4 class="justifyText">To import projects from Jira please type in the ticket number!</h4>
      <div class="row searchContainer">
        <div class="col-xs-12">
          <div id="custom-search-input">
            <div class="input-group col-md-12">
              <input type="text" class="form-control input-lg searchInput" placeholder="Ticket Number" v-model="ticketNumber" />
              <span class="input-group-btn">
                <button class="btn btn-lg" type="button" @click="importProject">
                  Import
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <project-detail :projectAux="project" :key="project.id" v-if="existProject"></project-detail>
    <div class="container" v-if="existProject">
      <div class="row">
        <div class="col-xs-12">
          <button @click="cancel" class="btn cancel">Cancel</button>
          <button @click="saveProject" class="btn success">Continue</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" v-if="error.exist">
        <div class="col-xs-12 errorContainer">
          <div class="alert alert-danger alert-dismissible" role="alert">
            <button type="button" class="close" @click="closeError"><span>&times;</span></button>
            <strong>Error!</strong> {{error.message}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectDetail from './projectDetail.vue';
import axios from 'axios';
import { baseApi } from '../../app.constants';
export default {
  components: {
    projectDetail: projectDetail
  },
  data() {
    return {
      ticketNumber: '',
      existProject: false,
      project: {},
      error: {}
    }
  },
  methods: {
    importProject() {
      if (this.ticketNumber.length) {
        this.$Progress.start();
        this.error = {};
        axios.get(`${baseApi}/import/${this.ticketNumber}`)
          .then(response => {
            let data = response.data;
            if (data) {
              this.existProject = true;
              this.project = data;
            } else {
            }
            this.$Progress.finish();
          })
          .catch(error => {
            this.error = {
                exist: true,
                message: 'Ticket not found, please try again!'
              };
            this.$Progress.fail();
          });
      }
    },
    cancel(){
      this.project = {};
      this.existProject = false;
      this.ticketNumber = '';
      this.error = {};
    },
    saveProject() {
      if (this.ticketNumber.length) {
        this.error = {};
        this.$Progress.start();
        let data = {
          project: this.project
        };

        axios.post(`${baseApi}/import`, this.project)
          .then(response => {
            let data = response.data;
            if (data && !data.haveErrors) {
              this.$router.push({ path: '/projects' });
            } else {
              this.error = {
                exist: true,
                message: data.message
              };
            }
            this.$Progress.finish();
          })
          .catch(error => {
            this.error = {
                exist: true,
                message: 'Something went wrong, please try again!'
              };
            this.$Progress.fail();
          });
      }
    },
    closeError(){
      this.error.exist = false;
    }
  }
}
</script>

<style scoped>
  .errorContainer {
    margin-top: 10px;
  }

  .alert{
    border-radius: 0;
  }

</style>
