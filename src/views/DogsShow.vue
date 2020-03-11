<template>
  <div class="dogs-show">
        <h2 class="text-center">{{ dog.name }}</h2>
        <h2 class="text-center">{{ dog.breed_description }}</h2>
        <h2 class="text-center">{{ dog.bio }}</h2>
        <h2 class="text-center">{{ dog.active_status }}</h2>
        <h2 class="text-center">{{ dog.size }}</h2>
        <h2 class="text-center">{{ dog.latitude }}</h2>
        <h2 class="text-center">{{ dog.longitude }}</h2>
        <h2 class="text-center">{{ dog.user_id }}</h2>
        <h2 class="text-center">{{ dog.price }}</h2>
        <h2 class="text-center">{{ dog.address }}</h2>
        <h2 class="text-center">{{ dog.city }}</h2>
        <h2 class="text-center">{{ dog.zipcode }}</h2>
          <router-link class="btn btn-info m-2" v-bind:to="'/dogs/' + dog.id + '/edit'">Edit</router-link>
          <button class="btn btn-info m-2" v-on:click="destroyDog()">Delete</button>
     
   <!--    <div v-for=" image in dog.images" class="col-md-6">
        <img class="img-fluid w-100 mt-5" v-bind:src="image.image_url" v-bind:alt="dog.name">
        <button @click="destroyImage(image)">destroy</button>
    </div>
 -->

    
    
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
        zipcode: ""
        // images: [
        //           {
        //           id: "",
        //           image_url: ""
        //           }]
        
      }
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
    destroyDog: function() {
      axios
        .delete("/api/dogs/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/");
        });
    }
    // destroyImage: function(inputImage) {
    //   axios
    //     .delete("/api/images/" + inputImage.id)
    //     .then(response => {
    //       var index = this.dog.images.indexOf(inputImage);
    //       this.dog.images.splice(index, 1)

    //     });
    // }
  }
};
</script>