<template>
  <div class="home">

    <!-- Home Section Start-->
      <section class="bg_home_cover full_height_100vh_home" id="home">
          <div class="home_table_cell">
              <div class="home_table_cell_center">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="">
                                  <h1 class="home_title text-white text-capitalize mb-0 pt-3">Sniffer / Adoption App</h1>

                                  <div class="home_text_details">
                                      <h5 class="home_subtitle mt-4 mb-0">Make your home happier and lively with a pet</h5>
                                  </div>
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
                          </div>
                          <h1 class="mt-3 text-font ">Our Awesome <span class="text_custom text-font"> Dogs </span></h1>
                          <br>
                      </div>
                  </div>
              </div>
             
              <div class="row">
                <div class="col-lg-4 " v-for="dog in dogs">
                      <router-link class="img-zoom" v-bind:to="'/dogs/' + dog.id">
                        <div class="work_box">
                            <img v-bind:src="dog.default_image_url ? dog.image_url : dog.default_image_url" class="dog-pict kd mx-auto d-block rounded">
                            <div class="work_detail">
                                <h2 class="mb-0 text-display">{{ dog.name }}</h2>
                                <p class="mb-0 text-display">{{ dog.bio }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
              </div>
           </div>
      </section>
      <!-- Our Portfolio End  -->
     
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      dogs: [],
      nameFilter: "",
      image: "",
    };
  },
  created: function () {
    if (this.$route.query.breed) {
      axios.get("/api/dogs?breed=" + this.$.query.breed).then((response) => {
        this.dogs = response.data;
      });
    } else {
      axios.get("/api/dogs").then((response) => {
        this.dogs = response.data;
      });
    }
  },
  methods: {},
  mixins: [Vue2Filters.mixin],
  beforeRouteUpdate(to, from, next) {
    if (to.query.breed) {
      axios.get("/api/dogs?breed=" + to.query.breed).then((response) => {
        this.dogs = response.data;
      });
    } else {
      axios.get("/api/dogs").then((response) => {
        this.dogs = response.data;
      });
    }
  },
};
</script>
