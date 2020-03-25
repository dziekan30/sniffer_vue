<template>
  <div class="requests-edit">

    <br>
    <br>
    <br>
    <br>
  

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateRequest()">
        <h1 class="text-center mb-5">Edit Request</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Id: </label>
      
          <p class="form-control">{{request.id}}</p>
        </div>

      <!--   <div class="form-group">
          <label>User Id: </label>
          <input class="form-control" type="text" v-model="request.user_id">
        </div> -->

       <!--  <div class="form-group">
          <label>Dog Id: </label>
          <input class="form-control" type="text" v-model="request.dog_id">
        </div> -->

        <div class="form-group">
          <label>Approved: </label>
          <input class="form-control" type="text" v-model="request.approved">
        </div>

        <input class="btn btn_custom btn_rounded mr-3" type="submit" value="Update">

      </form>
    </div>

  </div>
</template>

<style>
</style>

<script>
  var axios = require("axios")

export default {
  data: function() {
    return {
      request: {
        id: "",
        user_id: "",
        dog_id: "",
        approved: ""
      },
      errors: []
      
    };
  },
  created: function() {
    axios
      .get("/api/requests/" + this.$route.params.id)
      .then(response => {
        this.request = response.data;
      });
  },
  methods: {
    updateRequest: function() {
      var clientParams = {
        dog_id: this.request.dog_id,
        approved: this.request.approved
      };
    axios
      .patch("/api/requests/" + this.$route.params.id, clientParams)
      .then(response => {
         this.$router.push("/requests/" + this.$route.params.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>