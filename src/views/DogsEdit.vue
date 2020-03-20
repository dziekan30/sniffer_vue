<template>
  <div class="dogs-edit">
    <h1>Edit Page !</h1>

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateDog()">
        <h1 class="text-center mb-5">Edit Dog</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Name: </label>
          <input class="form-control" type="text" v-model="dog.name">
        </div>
        
        <label>Breed: </label>

        <ul>
          <li v-for="breed in breeds">
            <input type="checkbox" v-bind:value="breed.id" v-model="checkedIds" >
            <label for="checkbox">{{breed.name}}</label>
          </li>
        </ul>
        <span>Checked id: {{ checkedIds }}</span>


        <div class="form-group">
          <label>Bio: </label>
          <input class="form-control" type="text" v-model="dog.bio">
        </div>

        <div class="form-group">
          <label>Active Status: </label>
          <input class="form-control" type="text" v-model="dog.active_status">
        </div>

        <div class="form-group">
          <label>Size: </label>
          <input class="form-control" type="text" v-model="dog.size">
        </div>
        
        <div class="form-group">
          <label>Price: </label>
          <input class="form-control" type="number" v-model="dog.price">
        </div>

        <div class="form-group">
          <label>Address: </label>
          <input class="form-control" type="text" v-model="dog.address">
        </div>


        <div class="form-group">
          <label>City: </label>
          <input class="form-control" type="text" v-model="dog.city">
        </div>


        <div class="form-group">
          <label>Zipcode: </label>
          <input class="form-control" type="text" v-model="dog.zipcode">
        </div>



        <input class="btn btn-info" type="submit" value="Update">
      </form>
    </div>


   <!--  <form v-for="image in dog.images" class="form-group" v-on:submit.prevent="updateImage(image)">
      <label>Image URL: </label>
      <input class="form-control" type="text" v-model="image.image_url">
      <input class="btn btn-info" type="submit" value="Update">
    </form> -->

  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

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
        breeds: []
      },
      errors: [],
      breeds: [],
      checkedIds: [],
    };
  },
  created: function() {
    axios
      .get("/api/dogs/" + this.$route.params.id)
      .then(response => {
        this.dog = response.data;
        this.checkedIds = response.data.breeds.map(function(breedObject) { return breedObject.id });
      });
    axios
      .get("/api/breeds")
      .then(response => {
        this.breeds = response.data;
      });
  },
  methods: {
    updateDog: function() {
      var clientParams = {
        id: this.dog.id,
        name: this.dog.name,
        breed_description: this.dog.breed_description,
        bio: this.dog.bio,
        active_status: this.dog.active_status,
        size: this.dog.size,
        user_id: this.dog.user_id,
        price: this.dog.price,
        address: this.dog.address,
        city: this.dog.city,
        zipcode: this.dog.zipcode,
        breed_ids: this.checkedIds
         };

    axios
       .patch("/api/dogs/" + this.$route.params.id, clientParams)
       .then(response => {
         this.$router.push("/dogs/" + this.$route.params.id);
          // console.log(response.data);
       }).catch(error => {
         this.errors = error.response.data.errors;
       });
    axios
      .patch("/api/makeups" + this.$route.params.id, clientParams)
      .then(response => {
        this.$router.push("/");
      });
    },

    // updateImage: function(inputImage) {
    //   var clientParams = {
    //     id: inputImage.id,
    //     image_url: inputImage.image_url
    //   };
    // axios
    //    .patch("/api/images/" + this.$route.params.id, clientParams)
    //    .then(response => {
    //      this.$router.push("/dogs/" + this.$route.params.id);
    //  }).catch(error => {
    //      this.errors = error.response.data.errors;
    //    });
    // }

  }
};
</script>




