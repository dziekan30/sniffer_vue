<template>
  <div class="login">

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
                        <h3 class="mt-3">Log In To <span class="text_custom"> Sniffer</span></h3>
                    </div>
                </div>
            </div>
            <div class="row mt-5 vertical_content_manage">
                <div class="col-lg-5">
                   <div class="description_img mt-3">
                       <img src="https://media2.giphy.com/media/kudIERso2pFiE/200.webp?cid=790b7611a3e561f938d2dfcfc1bfc2ec16f3b7d8dbaa1d88&rid=200.webp" alt="" class="dog-pict img-fluid mx-auto d-block">
                   </div>
               </div>

                <div class="col-lg-7">
                    <div class="business_form_custom mt-3">
                        <form v-on:submit.prevent="submit()">
                          <ul>
                            <li class="text-danger" v-for="error in errors">{{ error }}</li>
                          </ul>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" v-model="email" placeholder="Your email..." required="">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" v-model="password" placeholder="Your Password..." required="">
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
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$parent.userId = response.data.user_id;
          localStorage.setItem("userId", response.data.user_id);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>