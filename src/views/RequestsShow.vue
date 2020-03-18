<template>
  <div class="requests-show">
    <h1>Id: {{ request.id }}</h1>
    <h1>User Id: {{ request.user_id }}</h1>
    <h1>Dog Id: {{ request.dog_id }}</h1>
    <h1>Approved: {{ request.approved }}</h1>

    <div v-if="$parent.userId == request.user_id"> 
      <button class="btn btn-info m-2" v-on:click="destroyRequest()">Delete</button>
    </div>

      <!-- <router-link class="btn btn-info m-2" to="'/requests/'">Update</router-link> -->
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
      request: {
        id: "",
        user_id: "",
        dog_id: "",
        approved: ""
      }
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
  destroyRequest: function() {
    axios
      .delete("/api/requests/" + this.$route.params.id)
      .then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>