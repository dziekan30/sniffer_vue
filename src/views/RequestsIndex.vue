<template>
  <div class="requests-index">
    <h1>All My Requests !</h1>
    <div v-for="request in requests">
      <router-link v-bind:to="'/requests/' + request.id">
        <div v-if="$parent.userId == request.user_id">
          <br>
          <br>
          <h1>Id: {{request.id}}</h1>
          <h1>User Id: {{request.user_id}}</h1>
          <h1>Dog Id: {{request.dog_id}}</h1>
          <h1>Approved: {{request.approved}}</h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios') 

export default {
  data: function() {
    return {
      requests: []
    };
  },
  created: function() {
    axios
      .get("/api/requests")
      .then(response => {
        this.requests = response.data;
      });
  },
  methods: {}
};
</script>