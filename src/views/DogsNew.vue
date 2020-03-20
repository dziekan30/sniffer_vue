<template>
  <div class="dogs-new">
    <h1>New Dog !</h1>

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="createDog()">
        <h1 class="text-center mb-5">New Dog</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Name: </label>
          <input class="form-control" type="text" v-model="name">
        </div>

        <label>Breed: </label>
            <ul>
          <li v-for="breed in breeds">
            <input type="checkbox" v-bind:value="breed.id" v-model="checkedIds" >
            <label for="checkbox">{{breed.name}}</label>
        </li>
        <span>Checked id: {{ checkedIds }}</span>
            </ul>

        <div class="form-group">
          <label>Bio: </label>
          <input class="form-control" type="text" v-model="bio">
        </div>

       <!--  <div class="form-group">
          <label>Active Status: </label>
          <input class="form-control" type="text" v-model="active_status">
        </div> -->

        <div class="form-group">
          <label>Size: </label>
          <input class="form-control" type="number" v-model="size">
        </div>

        <div class="form-group">
          <label>Price: </label>
          <input class="form-control" type="number" v-model="price">
        </div>

        <div class="form-group">
          <label>Address: </label>
          <input class="form-control" type="text" v-model="address">
        </div>


        <div class="form-group">
          <label>City: </label>
          <input class="form-control" type="text" v-model="city">
        </div>


        <div class="form-group">
          <label>Zipcode: </label>
          <input class="form-control" type="text" v-model="zipcode">
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
      name: "",
      breed_description: "",
      bio: "",
      active_status: "",
      size: "",
      price: "",
      address: "",
      city: "",
      zipcode: "",
      errors: [],
      breeds: [],
      breed: { 
                id: "",
                name: ""
              },
      checkedIds: [],
      image: ""
    };
  },
  created: function() {
    axios
      .get("/api/breeds")
      .then(response => {
        this.breeds = response.data;
      });
  },
  methods: {},
    createDog: function() {

      var clientParams = {
        id: this.id,
        name: this.name,
        breed_description: this.breed_description,
        bio: this.bio,
        active_status: this.active_status,
        size: this.size,
        price: this.price,
        address: this.address,
        city: this.city,
        zipcode: this.zipcode,
        breed_ids: this.checkedIds
         };

    axios
      .post("/api/dogs", clientParams)
      .then(response => {
        this.$router.push("/");
        this.image = "";
        this.$refs.fileInput.value = "";
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status;
      });
    axios
      .post("/api/makeups", clientParams)
      .then(response => {
        this.$router.push("/");
      });
  }
};
</script>
