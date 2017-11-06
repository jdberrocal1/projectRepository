<template>
  <div>
    <div class="container-fluid" v-if="!existProject">
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
    <div class="container-fluid" v-if="existProject">
      <div class="row">
        <div class="col-xs-12">
          <h4>{{project.title}}</h4>
        </div>
        <div class="col-xs-12">
          <p><b>Main Technology:</b> {{project.mainTechnology}}</p>
        </div>
        <div class="col-xs-12">
          <p><b>Minimum Position:</b> {{project.minPosition}}</p>
        </div>
        <div class="col-xs-12">
          <p><b>Maximun Position:</b> {{project.maxPosition}}</p>
        </div>
        <div class="col-xs-12">
          <p><b>Years Of Experience:</b> {{project.yearsOfExperience}}</p>
        </div>
        <div class="col-xs-12">
          <p><b>English Level:</b> {{project.englishLevel}}</p>
        </div>
        <div class="col-xs-12">
          <b>Requirements:</b>
          <p> {{project.requirements}}</p>
        </div>
        <div class="col-xs-12" v-if="project.preferableKnowledge.softSkills || project.preferableKnowledge.hardSkills">
          <b>Mandatory Knowledge:</b>
          <p><b>-Hard Skills:</b>{{project.mandatoryKnowledge.hardSkills}}</p>
          <p v-if="project.mandatoryKnowledge.softSkills"><b>-Soft Skills:</b>{{project.mandatoryKnowledge.softSkills}}</p>
        </div>
        <div class="col-xs-12" v-if="project.preferableKnowledge.softSkills || project.preferableKnowledge.hardSkills">
          <b>Preferable Knowledge:</b>
          <p><b>-Hard Skills:</b>{{project.preferableKnowledge.hardSkills}}</p>
          <p v-if="project.preferableKnowledge.softSkills"><b>-Soft Skills:</b>{{project.preferableKnowledge.softSkills}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button @click="cancel" class="btn cancel">Cancel</button>
          <button @click="saveProject" class="btn success">Continue</button>
        </div>
      </div>
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
export default {
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
        this.$http.get('/import/' + this.ticketNumber)
          .then(response => {
            let data = response.body;
            if (data) {
              this.existProject = true;
              this.project = data;
            } else {
            }
            this.$Progress.finish();
          })
          .catch(error => {
            console.log(error);
            this.$Progress.fail();
          });
      }
    },
    cancel(){
      this.project = {};
      this.existProject = false;
      this.ticketNumber = '';
    },
    saveProject() {
      debugger;
      if (this.ticketNumber.length) {
        this.$Progress.start();
        let data = {
          id: this.ticketNumber
        };

        this.$http.post('/import', data)
          .then(response => {
            let data = response.body;
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
            console.log(error);
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
