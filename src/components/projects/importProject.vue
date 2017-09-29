<template>
  <div class="container-fluid">
    <h4 class="justifyText">To import projects from Jira please type in the ticket number!</h4>
    <div class="row searchContainer">
        <div class="col-xs-12">
          <div id="custom-search-input">
            <div class="input-group col-md-12">
              <input type="text" class="form-control input-lg searchInput" placeholder="Ticket Number" v-model="ticketNumer" />
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
</template>

<script>
export default {
  data(){
    return {
      ticketNumer:''
    }
  },
  methods:{
    importProject(){
      if(this.ticketNumer.length){
        this.$Progress.start();
        this.$http.get('/import/' + this.ticketNumer)
          .then(response => {
            let data = response.body;
            if (data && data.successful) {
              console.log(data);
            } else {
            }
            this.$Progress.finish();
          })
          .catch(error => {
            console.log(error);
            this.$Progress.fail();
          });
      }
    }
  }
}
</script>

<style>

</style>
