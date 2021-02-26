<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <div class="form-group px-2 py-2">
      <div>
        <input
            v-model="username"
            id="usernameinput"
            placeholder="username"
            class="myRounded"
            required><br><br>
      </div>
      <div>
        <input
            v-model="password"
            type="password"
            id="passwordinput"
            placeholder="password"
            class="myRounded"
            required><br><br>
      </div>
    </div>
    <div>
      <div class="pb-3">
        <button
            v-on:click="login(username, password)"
            type="submit"
            class="btn btn-outline-primary shadow-sm btn-lg">
          Login
        </button>
      </div>
      <div class="alert alert-success py-2" v-if="loginSuccessful">
        Login successful!
      </div>
      <div class="alert alert-danger py-2" v-if="loginFailed">
        Login failed!
      </div>
    </div>
  </div>
</template>

<script>

let login = function (username, password) {
  this.loginSuccessful = false;
  this.loginFailed = false;
  let url = this.$server + '/login';
  let body = {
    username,
    password,
  };

  this.$http.post(url, body)
      .then((response) => {
        if (response.status == '200') {
          this.loginSuccessful = true;
        }
      })
      .catch(error => {
        this.loginFailed = true;
      });
};


export default {
  name: 'LoginForm',
  methods: {
    login
  },
  props: {
    msg: String
  },
  data: function () {
    return {
      loginSuccessful: false,
      loginFailed: false
    };
  },

}
</script>

<style >
.myRounded {
  border-radius: 0.3rem;
  border-color: black;
  border-width: 1px;
}
a {
  color: #42b983;
}
</style>
