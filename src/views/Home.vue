<template>
  <div class="home">
    <br>
    <br>
    <h1>Welcome to Sniffer!!!</h1>

    <div  class="text-center" v-for="dog in dogs">
      <router-link v-bind:to="'/dogs/' + dog.id">
          <div>
            <h3>Name: {{ dog.name }}</h3>
            <h3>Breed:</h3>
            <div v-for="breed in dog.breeds">
                <li>
                  {{ breed.name }}
                </li>
            </div>
            <h3>Bio: {{ dog.bio }}</h3>
            <h3>Available: {{ dog.active_status }}</h3>
            <h3>Size: {{ dog.size }}</h3>
            <h3>Price: {{ dog.price }}</h3>
            <h3>Address: {{ dog.address }}</h3>
            <h3>City: {{ dog.city }}</h3>
            <h3>Zipcode: {{ dog.zipcode }}</h3>

            <div v-for="image in dog.images">
              <img v-bind:src="image.url">
            </div>

            <br>
            <br>
          </div>
      </router-link>
    </div>
<!--     <h2>{{dogs}}</h2> -->
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
      nameFilter: "",
      image: ""
    };
  },
  created: function() {
    if (this.$route.query.breed) {
      axios
        .get("/api/dogs?breed=" + this.$route.query.breed)
        .then(response => {
          this.dogs = response.data;
        });
    } else {
      axios
        .get("/api/dogs")
        .then(response => {
          this.dogs = response.data;
        });
    }
  },
  methods: {},
  mixins: [Vue2Filters.mixin],
  beforeRouteUpdate (to, from, next) {
      if (to.query.breed) {
        axios
          .get("/api/dogs?breed=" + to.query.breed)
          .then(response => {
            this.dogs = response.data;
          });
      } else {
        axios
          .get("/api/dogs")
          .then(response => {
            this.dogs = response.data;
          });
      }
  }
};
</script>
