<template>
  <div class="dogs-new">


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
                        <h3 class="mt-3">Create Profile for a <span class="text_custom">Dog </span></h3>
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
                        <form v-on:submit.prevent="createDog()">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="name" placeholder="Dog name..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="bio" placeholder="Dog Bio..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="size" placeholder="Dog Size (teacup, small, medium, large)" required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="number" v-model="price" placeholder="Dog price.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="address" placeholder="Address.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="city" placeholder="City and State.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input class="form-control" type="text" v-model="zipcode" placeholder="Zipcode.." required="">
                                    </div>
                                </div>
                               
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <input class="btn btn_custom btn_rounded mr-3" type="submit" value="Create">
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
  methods: {

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
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status;
      });
  },
  }
};
</script>
