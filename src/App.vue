<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .justifyText{
    text-align: justify;
  }

  .btn {
    border-radius: 0;
    color: white;
    cursor: pointer;
  }

  .btn:hover, .btn:active, .btn:active, .btn:focus {
    color: white;
  }

  .btn.success{
    background-color: #2F2D46;
  }

  .btn.cancel{
    background-color: #EF4023;
  }

  .loading{
    text-align: center;
    margin-top: 25%;
  }

  .clickable {
    cursor: pointer;
  }
</style>
