<template>
  <div class="dogs-edit">
  


    <!-- Contact Us Start -->
    <section class="section_all" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title_all text-center">
                        <div class="section_icons">
                          <br>
                            <i class="mbri-contact-form"></i>
                        </div>
                        <h3 class="mt-3">Create Profile fo a <span class="text_custom">Dog </span></h3>
                  </div>
                </div>
            </div>
            <div class="row mt-5 vertical_content_manage">
                <div class="col-lg-5">
                    <div class="contact_info_box mt-3 bg-light p-5">
                        <div class="">
                            <h5 class="text_customt">Breed Description </h5>
                              <div class="custom-control custom-checkbox" v-for="(breed, index) in breeds">
                                <input type="checkbox" class="custom-control-input" :id="'customCheck' + index" v-bind:value="breed.id" v-model="checkedIds">
                                <label class="custom-control-label" :for="'customCheck' + index">{{breed.name}}</label>
                              </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="business_form_custom mt-3">
                        <form v-on:submit.prevent="updateDog()">
                            <div class="row">
                                <ul>
                                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                </ul>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.name" placeholder="Dog name..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.bio" placeholder="Dog Bio..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.size" placeholder="Dog Size (teacup, small, medium, large)" required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.active_status" placeholder="Available (true, false)?..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="number" v-model="dog.price" placeholder="Dog price.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.address" placeholder="Address.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.city" placeholder="City and State.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="dog.zipcode" placeholder="Zipcode.." required="">
                                    </div>
                                </div>
                               
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <input class="btn btn_custom btn_rounded mr-3" type="submit" value="Update">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Us End -->

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
  }
};
</script>




