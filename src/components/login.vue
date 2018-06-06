<template>
  <div class="login-page">
    <div class="form">
      <img src="./../assets/logo.png" alt="Avantica" width="60%">
      <form class="login-form" novalidate>
        <input type="email" placeholder="Email" v-model="credentials.userNameOrEmail" v-validate="{ rules: { required: true, email: true } }" />
        <input type="password" placeholder="Password" v-model="credentials.password" v-validate="{ rules: { required: true } }" />
        <p v-if="failedLogin" class="failedLogin">Email or Password incorrect!</p>
        <button @click="login" :disabled="isFormInvalid" class="btn">login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { baseApi } from '../app.constants';

export default {
  data() {
    return {
      credentials: {
        userNameOrEmail: '',
        password: ''
      },
      failedLogin: false
    }
  },
  computed: {
    isFormInvalid() {
      return Object.keys(this.fields).filter(key => !this.fields[key].valid).length > 0;
    }
  },
  methods: {
    login() {
      this.failedLogin = false;
      this.$Progress.start();
      axios.post(`${baseApi}/login`, this.credentials)
        .then(response => {
          console.log(response)
          let data = response.data;
          if (data && data.successful) {
            this.$store.dispatch('setLoggedUser', data.user);
            this.credentials = {};
            this.$router.push({ path: '/projects' });
          } else {
            this.failedLogin = true; 
            this.credentials.password = '';
          }
          this.$Progress.finish();
        })
        .catch(error => {
          this.failedLogin = true; 
          this.credentials.password = '';
          this.$Progress.fail();
        });
    }
  }
}
</script>

<style>
.login-page {
  width: 100%;
  margin: auto;
  position: fixed;
  top: 30%;
  padding: 0 10px;
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 460px;
  margin: 0 auto 100px;
  padding: 10px 35px 35px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form img {
  margin-bottom: 10px
}

.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form button {
  text-transform: uppercase;
  outline: 0;
  background: #2F2D46;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 0;
}

.form button:hover {
  color: white
}

.failedLogin {
  color: red;
  text-align: left;
}


</style>
