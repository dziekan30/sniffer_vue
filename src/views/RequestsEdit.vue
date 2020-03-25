<template>
  <div class="requests-edit">

    <!-- Contact Us Start -->
    <section class="section_all" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  <br>
                    <div class="section_title_all text-center">
                        <div class="section_icons">
                            <i class="mbri-contact-form"></i>
                        </div>
                        <h3 class="mt-3">Request <span class="text_custom"> Edit</span></h3>
                    </div>
                </div>
            </div>
            <div class="row mt-5 vertical_content_manage">
                <div class="col-lg-5">
                   <div class="description_img mt-3">
                       <img src="https://media2.giphy.com/media/3kuSo744UIPJjcJUEn/giphy.webp?cid=790b76111704464bfcf34fba411cd14f0f17989ce98bc145&rid=giphy.webp" alt="" class="dog-pict img-fluid mx-auto d-block">
                   </div>
               </div>

                <div class="col-lg-7">
                    <div class="business_form_custom mt-3">
                        <form v-on:submit.prevent="updateRequest()">
                          <ul>
                            <li class="text-danger" v-for="error in errors">{{ error }}</li>
                          </ul>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                      <h5 class="text_custom">Dog:</h5>
                                        <p class="form-control">{{request.dog.name}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                      <h5 class="text_custom">For:</h5>
                                        <p class="form-control"> {{request.user.name}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                      <h5 class="text_custom">Approved:</h5>
                                        <input class="form-control" type="text" v-model="request.approved" required="">
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
  var axios = require("axios")

export default {
  data: function() {
    return {
      request: {
        dog: [],
        id: "",
        user_id: "",
        dog_id: "",
        approved: "",
        user: []
      },
      errors: []
      
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
    updateRequest: function() {
      var clientParams = {
        dog_id: this.request.dog_id,
        approved: this.request.approved
      };
    axios
      .patch("/api/requests/" + this.$route.params.id, clientParams)
      .then(response => {
         this.$router.push("/dogs/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>