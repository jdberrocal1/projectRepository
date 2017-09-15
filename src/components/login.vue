<template>
  <div class="login-page">
    <div class="form">
      <img src="./../assets/logo-avantica-dark.png" alt="Avantica" width="60%">
      <form class="login-form" novalidate>
        <input type="email" placeholder="Email" v-model="credentials.email" v-validate="{ rules: { required: true, email: true } }"/>
        <input type="password" placeholder="Password" v-model="credentials.password" v-validate="{ rules: { required: true } }"/>
        <p v-if="failedLogin">Email or Password incorrect!</p>
        <button @click="login" :disabled="isFormInvalid" class="btn">login</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      failedLogin: false
    }
  },
  computed: {
    isFormInvalid() {
      return Object.keys(this.fields).filter(key => !this.fields[key].valid).length > 0;
    },
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    login() {
      this.failedLogin = false;
      let user = this.users.find(u => {
        return u.password === this.credentials.password && u.email === this.credentials.email;
      });
      if(user) {
        let loggedUser = {
          password: user.password,
          email: user.email,
          name: user.name
        };

        this.$store.dispatch('setLoggedUser', loggedUser);
        this.credentials = {};
      } else {
        this.failedLogin = true;
        this.credentials.password = '';
      }
    }
  }

}
</script>

<style>
.login-page {
  width: 100%;
  padding: 50% 0 0;
  margin: auto;
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

</style>
