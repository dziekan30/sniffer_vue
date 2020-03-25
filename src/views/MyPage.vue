<template>
  <div class="home">

  
    <!-- Why Choose Us Start -->
    <section class="section_all" v-for="dog in dogs">
        <div class="container" v-if="$parent.userId == dog.user_id">
            <div class="row vertical_content_manage">
                <div class="col-lg-6">
                    <div class="description_header_main mt-3">
                      <router-link class="img-zoom" v-bind:to="'/dogs/' + dog.id">
                        <h1 class="business_choose_box">Name: {{ dog.name }}</h1>

                      </router-link>
                        
                        

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
                            <br>
                            <br>
                            <h3 class="text_custom">Requests:</h3>
                            <div v-for="request in dog.requests">
                                <h5 class="text-capitalize mb-0">Request Id: {{request.id}}</h5>
<!--                                 <h5 class="text-capitalize mb-0">User Id: {{request.user_id}}</h5>
 -->                            <h5 class="text-capitalize mb-0">Name: {{ request.user.name }} - {{ request.approved ? "approved" : "not approved" }}</h5>
                                <h5 class="text-capitalize mb-0">Phone Number: {{ request.user.phone_number }}</h5>
                                <h5 class="text-capitalize mb-0">Email: {{ request.user.email }}</h5>
                                <br>
                          </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="description_img mt-3" >
                      <router-link class="img-zoom" v-bind:to="'/dogs/' + dog.id">
                        <img v-bind:src="dog.default_image_url" alt="/dog_profile.png" class="dog_pict img-fluid mx-auto d-block">
                      </router-link>
                    </div>
                </div>


                
                
              

            </div>
        </div>
    </section>
    <!-- Descrption end -->

  </div>
</template>

<style>
.dog_pict {
  width: 300%; 
  height: 300%;
}
</style>

<script>
  var axios = require("axios");
  import Vue2Filters from 'vue2-filters';

export default {
  data: function() {
    return {
      dogs: [],
      requests: [],
      nameFilter: ""
    };
  },
  created: function() {
    axios
      .get("/api/dogs")
      .then(response => {
        this.dogs = response.data;
        // console.log(response.data)
        axios.get("/api/requests")
        .then(response => {
          this.requests = response.data;
          console.log(response.data);
        });
      });
  },
  methods: {},
  mixins: [Vue2Filters.mixin]
};
</script>
