<template>
  <div class="requests-show">


    <!-- Why Choose Us Start -->
    <section class="section_all bg-light">
        <div class="container">
            <div class="row vertical_content_manage">
                <div class="col-lg-6">
                    <div class="description_header_main mt-3" v-if="$parent.userId == request.user_id">
                        <h4 class="text-capitalize font-weight-normal" >Request:</h4>
                        <!-- <p class="text-muted mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam inventore veritatis et quasi architecto beatae explicabo.</p> -->

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
                                <h6 class="text-capitalize mb-0">Dog Id: {{request.dog_id}}</h6>
                            </div>
                        </div>

                        <div class="business_choose_box p-3 mt-3">
                            <div class="business_choose_icon">
                                <span class=""></span>
                            </div>
                            <div class="business_choose_details mt-2">
                                <h6 class="text-capitalize mb-0">Approved: {{request.approved}}</h6>
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
                        <img src="https://media0.giphy.com/media/5LONmJBzkVSOQ/giphy.gif?cid=790b761194e11f87337fff99ef7c7a9e3c118ce68b12198c&rid=giphy.gif" alt="" class="dog-pict img-fluid mx-auto d-block">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Descrption end -->



      <!-- <router-link class="btn btn-info m-2" to="'/requests/'">Update</router-link> -->
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