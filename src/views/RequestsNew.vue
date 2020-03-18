<template>
  <div class="requests-new">
    <h1>New Requests!</h1>

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="newRequest()">
        <h1 class="text-center mb-5">New Request</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Id: </label>
          <input class="form-control" type="text" v-model="request.id">
        </div>

        <div class="form-group">
          <label>User Id: </label>
          <input class="form-control" type="text" v-model="request.user_id">
        </div>

        <div class="form-group">
          <label>Dog Id: </label>
          <input class="form-control" type="text" v-model="request.dog_id">
        </div>

        <div class="form-group">
          <label>Approved: </label>
          <input class="form-control" type="text" v-model="request.approved">
        </div>

        <input class="btn btn-info" type="submit" value="Create">

      </form>
    </div>

  </div>
</template>

<style>
</style>

<script>
  var axios = require("axios");

export default {
  data: function() {
    return {
      user_id: "",
      dog_id: "",
      request: [],
      errors: []
    };
  },
  created: function() {},
  methods: {
    newRequest: function() {
      var clientParams = {
        id: this.id,
        user_id: this.user_id,
        dog_id: this.dog_id,

      };
    axios
      .post("/api/requests", clientParams)
      .then(response => {
        this.$router.push("/requests");
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status; 
      });
    }
  }
};
</script>