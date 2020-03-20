<template>
  <div class="dogs-show">
    <div class="text-center">
      <h2>Name: {{ dog.name }}</h2>
      <h2>Breed:</h2>
        <div v-for="breed in dog.breeds">
          <li>
            {{ breed.name }}
          </li>
        </div>
      <h2 class="text-center">Bio: {{ dog.bio }}</h2>
      <h2 class="text-center">Available: {{ dog.active_status }}</h2>
      <h2 class="text-center">Size: {{ dog.size }}</h2>
      <h2 class="text-center">Price: {{ dog.price }}</h2>
      <h2 class="text-center">Address: {{ dog.address }}</h2>
      <h2 class="text-center">City: {{ dog.city }}</h2>
      <h2 class="text-center">Zip Code: {{ dog.zipcode }}</h2>

      <div v-for="image in dog.images">
        <img v-bind:src="image.url">
      </div>
      <br>
    </div>
 

    <div class="text-center" v-if="$parent.userId == dog.user_id"> 
      <router-link class="btn btn-info m-2" v-bind:to="'/dogs/' + dog.id + '/edit'">Edit</router-link>
      <button class="btn btn-info m-2" v-on:click="destroyDog()">Delete</button>
      <br>
    <div class="text-center">
      <form v-on:submit.prevent="createImage()">
        <div>
          Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
        </div>
        <input class="btn btn-info" type="submit" value="Create Image">
      </form>
    </div>
      <div v-for=" image in dog.images">
        <img  v-bind:src="image.file" v-bind:alt="dog.name">
        <button class="btn btn-info" @click="destroyImage(image)">Delete Image</button>
      </div>
      <br>
      <div v-for="request in dog.requests">
        
          <h1>Request Id: {{request.id}}</h1>
          <h1>User Id: {{request.user_id}}</h1>
          <h1>Name: {{ request.user.name }} - {{ request.approved ? "approved" : "not approved" }}</h1>
          <h1>Phone Number: {{ request.user.phone_number }}</h1>
          <h1>Phone Number: {{ request.user.email }}</h1>
          <br>
          
    </div>
    </div>

    <div v-else>
      <div v-if="!dog.requested">
        <button class="btn btn-info m-2"  v-on:click="sendRequest()">Request Adoption</button>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      dog: {
        name: "",
        breed_description: "",
        bio: "",
        active_status: "",
        size: "",
        latitude: "",
        longitude: "",
        user_id: "",
        price: "",
        address: "",
        city: "",
        zipcode: "",
        requested: false,
        breeds: [],
        image: "",
        requests: []
      },
      breeds: [],
      image: ""
    };
  },
  created: function() {
    axios
      .get("/api/dogs/" + this.$route.params.id)
      .then(response => {
        this.dog = response.data;
      });
  },
  
  methods: {
    setFile: function(event) {

      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    createImage: function() {

    var params = new FormData();
    params.append("file", this.image);
    params.append("dog_id", this.dog.id);
    console.log(params)

      axios
      .post("api/images", params)
      .then(response => {
        this.image = "";
        this.$refs.fileInput.value = "";
        axios
          .get("/api/dogs/" + this.$route.params.id)
          .then(response => {
            this.dog = response.data;
          });
      });
     },

    destroyDog: function() {
      axios
        .delete("/api/dogs/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/");
        });
    },
    sendRequest: function() {
      var clientParams = {
        dog_id: this.dog.id
      };

      axios
        .post("/api/requests", clientParams)
        .then(response => {
          this.$router.push("/requests");
        }).catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });

    },
    showRequest: function() {
      this.$router.push("/requests")
    },

    destroyImage: function(inputImage) {
      axios
        .delete("/api/images/" + inputImage.id)
        .then(response => {
          var index = this.dog.images.indexOf(inputImage);
          this.dog.images.splice(index, 1)

        });
    }
  }
};
</script>