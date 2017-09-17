<template>
  <nav class="navbar darkNav">
    <app-loading v-if="isLoading"></app-loading>
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" @click="showMenu = !showMenu">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>        
        <router-link to='/' class="navbar-brand">
          Avantica Project Repository
        </router-link>
      </div>

      <div class="collapse navbar-collapse" :class="{'in': showMenu}">
        <ul class="nav navbar-nav">
          <router-link to="/" activeClass="active" tag="li">
            <a>Projects</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li" v-if="isUserLogged">
            <a>Add Project</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
           <router-link to="/login" tag="li" v-if="!isUserLogged">
            <a>Login</a>
          </router-link>
          <li v-else @click="logOut"><a>{{loggedUser.name}} - Logout</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>

export default {
   computed:{
    loggedUser(){
      return this.$store.getters.loggedUser;
    },
    isUserLogged() {
      return this.$store.getters.isUserLogged;
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      showMenu: false
    }
  },
  methods:{
    logOut() {
      this.$store.dispatch('logout');
    }
  }

}
</script>

<style>
  .darkNav {
    background-color: #2F2D46;
    border-radius: 0;
    border: 3px solid #EF4023;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .darkNav a, .darkNav .whiteTxt {
    color: white;
  }

  .darkNav span.icon-bar{
    background-color: #EF4023;
  }

   .darkNav li>a:hover, .darkNav li>a:focus, .darkNav li.active > a,  .darkNav li.open > a {
    background-color: #EF4023;
  }
</style>
