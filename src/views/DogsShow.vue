<template>
  <div class="dogs-show">

      <!-- Why Choose Us Start -->
      <section class="section_all ">
          <div class="container">
              <div class="row vertical_content_manage">
                  <div class="col-lg-6">
                      <div class="description_header_main mt-3">
                          <h1 class="display-4">Name: {{ dog.name }}</h1>
                          
                          

                          <div class="business_choose_box p-3 mt-3">
                            <h3 class="text_custom">Breed:</h3>
                              <div class="business_choose_details mt-2"v-for="breed in dog.breeds">
                                  <li class="text-capitalize mb-0" >{{ breed.name }}</li>
                              </div>
                          </div>

                          <div class="business_choose_box p-3 mt-3">
                            <h3 class="text_custom">Bio:</h3>
                              <div class="business_choose_details mt-2">
                                  <h6 class="text-capitalize mb-0">{{ dog.bio }}</h6>
                              </div>
                          </div>

                          <div class="business_choose_box p-3 mt-3">
                             <h3 class="text_custom">Available:</h3>
                              <div class="business_choose_details mt-2">
                                  <h6 class="text-capitalize mb-0">{{ dog.active_status }}</h6>
                              </div>
                          </div>

                          <div class="business_choose_box p-3 mt-3">
                              <h3 class="text_custom">Size:</h3>
                              <div class="business_choose_details mt-2">
                                  <h6 class="text-capitalize mb-0">{{ dog.size }}</h6>
                              </div>
                          </div>

                          <div class="business_choose_box p-3 mt-3">
                              <h3 class="text_custom">Price:</h3>
                              <div class="business_choose_details mt-2">
                                  <h6 class="text-capitalize mb-0">{{ dog.price }}</h6>
                              </div>
                          </div>

                          <div class="business_choose_box p-3 mt-3">
                              <h3 class="text_custom">Address:</h3>
                              <div class="business_choose_details mt-2">
                                  <h6 class="text-capitalize mb-0">{{ dog.address }}</h6>
                                  <h6 class="text-capitalize mb-0">{{ dog.city }}</h6>
                                  <h6 class="text-capitalize mb-0">{{ dog.zipcode }}</h6>
                              </div>
                          </div>
                        <div  v-if="$parent.userId == dog.user_id"> 
                          <div class="business_choose_box p-3 mt-3">
                            <h3 class="text_custom">Requests:</h3>
                            <div class="business_choose_details mt-2">
                              <div v-for="request in dog.requests">
                                  <h5>Request Id: {{request.id}}</h5>
                                  <!-- <h5>User Id: {{request.user_id}}</h5> -->
                                  <h5>Name: {{ request.user.name }} - {{ request.approved ? "approved" : "not approved" }}</h5>
                                  <h5>Phone Number: {{ request.user.phone_number }}</h5>
                                  <h5>Email: {{ request.user.email }}</h5>
                                  <br>
                                <router-link class="btn btn_custom btn_rounded mr-3" v-bind:to="'/requests/' + request.id + '/edit'">Edit Request</router-link>
                             </div>
                            </div>
                          </div>
                        </div>

                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="description_img mt-3" v-for="image in dog.images">
                          <img v-bind:src="image.url" class="img-fluid mx-auto d-block">
                      </div>
                  </div>


                  <div class="text-center" v-if="$parent.userId == dog.user_id"> 
                    <router-link class="btn btn_custom btn_rounded mr-3" v-bind:to="'/dogs/' + dog.id + '/edit'">Edit</router-link>
                    <button class="btn btn_custom btn_rounded mr-3" v-on:click="destroyDog()">Delete</button>
                    <br>
                    <br>
                  <div class="text-center">
                    <form v-on:submit.prevent="createImage()">
                      <div>
                        Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
                      </div>
                      <br>
                      <input class="btn btn_custom btn_rounded mr-3" type="submit" value="Create Image">
                    </form>
                  </div>
                  <br>
                  <div class="text-center" v-for=" image in dog.images">
                    <button class="btn btn_custom btn_rounded mr-3" @click="destroyImage(image)">Delete Image</button>
                  </div>
                    <br>
                    <br>
                    <br>
                  </div>
                  <div v-else>
                    <div class="mt-5" v-if="!dog.requested">
                      <span v-on:click="sendRequest()"  class="btn btn_custom btn_rounded mr-3">Request Adoption</span>
                    </div>
                  </div>

              </div>
          </div>
      </section>
      <!-- Descrption end -->

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