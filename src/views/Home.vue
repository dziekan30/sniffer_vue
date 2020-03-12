<template>
  <div class="home">
    <h1>Welcome to Sniffer!!!</h1>
    <div>
      <input type="text" name="nameFilter">
    </div>

    <div v-for="dog in dogs">
      <router-link v-bind:to="'/dogs/' + dog.id">
        <!-- <div v-for="image in dog.images">  
          <img v-bind:src="image.image_url" v-bind:alt="dog.name">
        </div> -->
          <div>
            <h1>Name: {{ dog.name }}</h1>
            <h1>Desc: {{ dog.breed_description }}</h1>
            <h1>Bio: {{ dog.bio }}</h1>
            <h1>Status: {{ dog.active_status }}</h1>
            <h1>Size: {{ dog.size }}</h1>
            <h1>Latitude: {{ dog.latitude }}</h1>
            <h1>Longitude: {{ dog.longitude }}</h1>
            <h1>User Id: {{ dog.user_id }}</h1>
            <h1>Price: {{ dog.price }}</h1>
            <h1>Address: {{ dog.address }}</h1>
            <h1>City: {{ dog.city }}</h1>
            <h1>Zipcode: {{ dog.zipcode }}</h1>
          </div>
      </router-link>
    </div>
   <!--  <h2>{{dogs}}</h2> -->
  </div>
</template>

<style>
</style>

<script>
  var axios = require("axios");
  import Vue2Filters from 'vue2-filters';

export default {
  data: function() {
    return {
      dogs: [],
      nameFilter: ""
    };
  },
  created: function() {
    axios
      .get("/api/dogs")
      .then(response => {
        this.dogs = response.data;
        console.log(response.data)
      });
  },
  methods: {},
  mixins: [Vue2Filters.mixin]
};
</script>
