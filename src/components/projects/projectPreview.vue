<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="container-fluid previewContainer">
      <div><h3>{{project.title}}</h3></div>
      <div class="body">
        <h4>{{project.mainTechnology}}</h4>
        <p>{{project.description}}</p>
      </div>
      <div class="footer">
        <button class="btn-review">View More</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['project']
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
    right: 30px;
  }

  .previewContainer .body {
    text-align: justify;
    max-height: 110px;
    overflow: hidden;
    margin-bottom: 10px;
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
