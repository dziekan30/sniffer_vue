<template>
  <div class="signup">

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
                        <h3 class="mt-3">Sign Up With <span class="text_custom">Us </span></h3>
                    </div>
                </div>
            </div>
            <div class="row mt-5 vertical_content_manage">
               <div class="col-lg-5">
                   <div class="description_img mt-3">
                       <img src="https://media0.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.webp?cid=790b7611058e0ae244664ee30295d9889fc5ef9cae6c7676&rid=giphy.webp" alt="" class="dog-pict img-fluid mx-auto d-block">
                   </div>
               </div>

                <div class="col-lg-7">
                    <div class="business_form_custom mt-3">
                        <form v-on:submit.prevent="submit()">
                            <div class="row">
                                <div class="col-lg-12">
                                  <ul>
                                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                  </ul>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" v-model="name" placeholder="Your name..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" v-model="email" placeholder="Your email..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" v-model="phone_number" placeholder="Your Phone Number.." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" v-model="password" placeholder="Your Password..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Password Confirmation..." required="">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <input type="submit" class="btn btn_custom btn_rounded mr-3" value="Submit">
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

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      phone_number: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>