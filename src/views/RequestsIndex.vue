<template>
  <div class="requests-index">
  <!--   <h1>All My Requests !</h1>
    <div v-for="request in requests">
      <router-link v-bind:to="'/requests/' + request.id">
        <div v-if="$parent.userId == request.user_id">
          <br>
          <br>
          <h1>Id: {{request.id}}</h1>
          <h1>User Id: {{request.user_id}}</h1>
          <h1>Dog Id: {{request.dog_id}}</h1>
          <h1>Approved: {{request.approved}}</h1>
        </div>
      </router-link>
    </div> -->

    <!-- Why Choose Us Start -->
    <section class="section_all bg-light">
        <div class="container">
            <div class="row vertical_content_manage">
                <div class="col-lg-6" v-for="request in requests">
                    <div class="description_header_main mt-3" v-if="$parent.userId == request.user_id">
                        <h4 class="text-capitalize font-weight-normal" >Request:</h4>
                        <!-- <p class="text-muted mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam inventore veritatis et quasi architecto beatae explicabo.</p> -->

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Id: {{request}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">User Name: {{}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Dog Id: {{}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Approved: {{}}</h6>
                            </div>
                        </div>
                        <router-link v-bind:to="'/requests/' + request.id">
                        <div class="mt-5">
                            <a href="/#" class="btn btn_custom btn_rounded mr-3">Info</a>
                        </div>
                      </router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="description_img mt-3">
                        <img src="https://media2.giphy.com/media/aSZSj0mT8f6tW/giphy.webp?cid=790b76114c563a93bc4ac8aeb5ee820fe678d62bd1a1d811&rid=giphy.webp" alt="" class="dog-pict img-fluid mx-auto d-block">
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