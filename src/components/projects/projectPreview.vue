<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="container-fluid previewContainer">
      <div><h3 class="ellipsis">{{project.title}}</h3></div>
      <div class="body">
        <h4>{{project.mainTechnology}} - {{project.englishLevel}}</h4>
        <p class="description ellipsis">{{project.description}}</p>
      </div>
      <div class="row techs">
        <div class="col-xs-6 tech" v-for="(tech, index) in skills" :class="[index % 2 === 1 ? 'techRight': 'techLeft']"><p class="ellipsis">{{tech}}</p></div>
      </div>
      <div class="footer">
        <!-- <button class="btn-review">View More</button> -->
        <router-link :to="{name: 'projectDetail', params: { id: project.id }}" class="btn-review" tag="button">
            View More
          </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['project'],
    computed:{
      skills(){
        if(this.project.mandatoryKnowledge && this.project.mandatoryKnowledge.hardSkills) {
          return this.project.mandatoryKnowledge.hardSkills.length > 4 ? this.project.mandatoryKnowledge.hardSkills.slice(0,4) : this.project.mandatoryKnowledge.hardSkills;
        }
        return [];
      }
    }
  }
</script>

<style>
  .previewContainer {
    background-color: #2F2D46;
    border-radius: 0px;
    color: white;
    min-height: 240px;
    margin: 5px 0;
    padding: 15px;
    box-shadow: 0px 5px 10px #888888;
    width: 100%;
  }

  .previewContainer h3, .previewContainer h4 {
    margin-top: 0;
  }

  .previewContainer .footer {
    position: absolute;
    bottom: 20px;
    right: 15px;
    margin-top: 10px;
  }

  .previewContainer .techs {
    margin-bottom: 10px;
  }

  .previewContainer .body {
    text-align: justify;
    max-height: 110px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .previewContainer .tech > p{
    text-align: center;
    background-color: #EF4023;
    min-height: 22px;
  }

  .previewContainer .techLeft {
    padding-left: 0;
    padding-right: 5px;
  }

  .previewContainer .techLeft > p{
    border-radius: 0 10px 10px 0;
  }

  .previewContainer .techRight {
    padding-right: 0;
    padding-left: 5px;
  }

  .previewContainer .techRight > p{
    border-radius: 10px 0 0 10px;
  }

   .previewContainer .ellipsis {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .btn-review {
    background-color: #EF4023;
    border-radius: 0px;
    text-transform: uppercase;
    cursor: pointer;
    height: 35px;
    border: 0;
    min-width: 75px;
    text-align: center;
  }

</style>
