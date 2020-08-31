<template>
  <div class="requests-show">

    <!-- Why Choose Us Start -->
    <section class="section_all bg-light">
        <div class="container">
            <div class="row vertical_content_manage">
                <div class="col-lg-6">
                    <div class="description_header_main mt-3" v-if="$parent.userId == request.user_id">
                        <h4 class="text-capitalize font-weight-normal" >Request:</h4>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Id: {{request.id}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">User Name: {{request.user.name}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Dog Id: {{request.dog.name}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Approved: {{ request.approved ? "approved" : "not approved" }}</h6>
                            </div>
                        </div>
                        <router-link v-bind:to="'/requests/' + request.id">
                        <div class="mt-5" v-if="$parent.userId == request.user_id">
                             <button class="btn btn_custom btn_rounded mr-3" v-on:click="destroyRequest()">Delete</button>
                        </div>
                      </router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="description_img mt-3">
                        <img v-bind:src=" request.dog ? request.dog.default_image_url : '#' " alt="" class="dog-pict img-fluid mx-auto d-block">
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
      request: {
        id: "",
        user_id: "",
        dog_id: "",
        approved: ""
      }
    };
  },
  created: function() {
    axios
      .get("/api/requests/" + this.$route.params.id)
      .then(response => {
        this.request = response.data;
      });
  },
  methods: {
  destroyRequest: function() {
    axios
      .delete("/api/requests/" + this.$route.params.id)
      .then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>