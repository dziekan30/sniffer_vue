<template>
  <div class="requests-index">

    <!-- Why Choose Us Start -->
    <section class="section_all bg-light">
        <div class="container">
          <div class="row vertical_content_manage section-spacer"  v-if="!requests[0]">
            <h1 class="align-middle">No Requests</h1>
          </div>

          <div class="row vertical_content_manage"  v-for="request in requests">
              <div class="col-lg-6">
                  <div class="description_header_main mt-3" >
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
                              <h6 class="text-capitalize mb-0">Dog Name: {{request.dog.name}}</h6>
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

                      <div class="mt-5">
                        <router-link v-bind:to="'/requests/' + request.id">
                          <a href="/#" class="btn btn_custom btn_rounded mr-3">Info</a>
                        </router-link>
                      </div>

                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="description_img mt-3">
                      <img v-bind:src=" request.dog ? request.dog.default_image_url : '#' "  alt="" class="dog_pict img-fluid mx-auto d-block">
                  </div>
              </div>
          </div>

        </div>
    </section>
    <!-- Descrption end -->

  </div>
</template>

<style scoped>
.section-spacer {
  min-height: 560px;
}
</style>

<script>
var axios = require('axios') 

export default {
  data: function() {
    return {
      requests: []
    };
  },
  created: function() {
    axios
      .get("/api/requests")
      .then(response => {
        this.requests = response.data;
      });
  },
  methods: {}
};
</script>