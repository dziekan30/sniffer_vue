<template>
  <div class="home">

    <!-- Home Section Start-->
      <section class="bg_home_cover full_height_100vh_home" id="home">
          <!-- <div class="bg_overlay_cover_on"></div> -->
          <div class="home_table_cell">
              <div class="home_table_cell_center">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="">
                                  <h1 class="home_title text-white text-capitalize mb-0 pt-3">Sniffer / Adoption App</h1>

                                  <div class="home_text_details">
                                      <p class="home_subtitle mt-4 mb-0">Make your home happier and lively with a pet</p>
                                  </div>

                                  <!-- <div class="home_btn_manage mt-4 pt-3">
                                      <router-link to="/" class="btn btn_custom btn_rounded mr-3">Get Started</router-link>
                                  </div> -->
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    <!-- Home Section End-->

      <!-- Our Portflio Start -->
      <section class="section_all text-center" id="portfolio">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="section_title_all text-center">
                          <div class="section_icons">
                              <!-- <i class="mbri-extension"></i> -->
                          </div>
                          <h3 class="mt-3">Our Awesome <span class="text_custom"> Dogs </span></h3>
                          <!-- <p class="section_subtitle mx-auto text-muted"></p> -->
                      </div>
                  </div>
              </div>


              <!-- problem below -->
              <div class="row">

                <div class="col-lg-4 " v-for="dog in dogs">
                      <router-link class="img-zoom" v-bind:to="'/dogs/' + dog.id">
                        <div class="work_box">
                            <img v-bind:src="dog.default_image_url" class="dog-pict kd mx-auto d-block rounded">
                            <div class="work_detail">
                                <h4 class="mb-0">{{ dog.name }}</h4>
                                <p class="mb-0">{{ dog.bio }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
              </div>

              <!-- problem above -->


           </div>
      </section>
      <!-- Our Portfolio End  -->
     
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
