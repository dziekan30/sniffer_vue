<template>
  <div id="app">

  
  <!-- START NAVBAR -->
    <nav class="navbar navbar-expand-lg fixed-top custom_nav_menu sticky">
        <div class="container">
            <!-- LOGO -->
            <a class="navbar-brand logo" href="index.html">
               <!--  <img src="images/logo-2.png" alt="" class="img-fluid logo-light">
                <img src="images/logo-dark.png" alt="" class="img-fluid logo-dark"> -->
            </a>
            <!-- <router-link class="navbar-brand logo" to="/">
                
                <img src="/images/logo-2.png" alt="" class="img-fluid logo-light">
                <img src="/images/logo-dark.png" alt="" class="img-fluid logo-dark">
            </router-link> -->

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i class="mdi mdi-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a  class="nav-link">Services</a> -->
                        <router-link class="nav-link" to="/dogs/new">New</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a  class="nav-link">Portfolio</a> -->
                        <router-link class="nav-link" to="/requests">Requests</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/dogs">MyPage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/requests">One Dog Request</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <a  class="nav-link">Pricing</a>
                    </li> -->
                    <li class="nav-item">
                        <!-- <a  class="nav-link">Blog</a> -->
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a  class="nav-link">Contact</a> -->
                        <router-link class="nav-link" to="/logout">Logout</router-link>
                    </li>
                </ul>

                <!-- <button class="btn_custom btn btn_small text-capitalize  navbar-btn mr-3">Log In</button> -->
                    <router-link class="btn_custom btn btn_small text-capitalize  navbar-btn mr-3" to="/login">Log In</router-link>
            </div>

        </div>
        <form @submit.prevent="$router.push('/?breed=' + breedFilter)" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="breedFilter" list="breed-names">

          <datalist id="breed-names">
            <option v-for="breed in breeds">{{ breed.name }}</option>
          </datalist>


          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Display</button>
        </form>
    </nav>
    <!-- END NAVBAR -->

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

                                <div class="home_btn_manage mt-4 pt-3">
                                    <router-link to="/" class="btn btn_custom btn_rounded mr-3">Get Started</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Home Section End-->


 

    <router-view/>
    <!-- START CTA -->
    <section class="section_all bg_buss_call_cta">
        <div class="bg_overlay_cover_on"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center text-white">
                        <h2 class="">“A dog is the only thing on earth that loves you more than you love yourself.” – Josh Billings</h2>
                        <p class="mx-auto cta_details mt-4 pt-2"></p>
                        <div class="mt-4 pt-3">
                            <a href="/#" class="btn btn_custom btn-rounded font-weight-bold"><i class="mdi mdi-phone"></i> Call (312-468-....)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END CTA -->
  </div>
   <!--  <div>
      <input type="text" name="nameFilter">
    </div> -->
</template>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      userId: "",
      breedFilter: "",
      dogs: [],
      breeds: []
    };
  },
  created: function() {
    var userId = localStorage.getItem("userId");
    if (userId) {
      this.userId = userId;
    }
  axios
    .get("/api/breeds")
    .then(response => {
      this.breeds = response.data;
    });


  }
  // mounted: function() {

    // $(window).on('scroll', function() {
    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 50) {
    //         $(".sticky").addClass("stickyadd");
    //     } else {
    //         $(".sticky").removeClass("stickyadd");
    //     }
    // });
    

    // $('.navbar-nav a, .scroll_down a').on('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top - 0
    //     }, 1500, 'easeInOutExpo');
    //     event.preventDefault();
    // });
    

    // $("#navbarCollapse").scrollspy({
    //     offset: 20
    // });
    

    
    //   $("#owl-demo").owlCarousel({
    //     autoPlay: 3000,
    //     stopOnHover: true,
    //     navigation: false,
    //     paginationSpeed: 1000,
    //     goToFirstSpeed: 2000,
    //     singleItem: true,
    //     autoHeight: true,
    // });

    // $(document).ready(function() {
    //     $("#app_testi").owlCarousel({
    //         autoPlay: 28000,
    //         items: 3,
    //         itemsDesktop: [1199, 3],
    //         itemsDesktopSmall: [979, 3]
    //     });
    // });
    

    
    // $('.img-zoom').magnificPopup({
    //     type: 'image',
    //     closeOnContentClick: true,
    //     mainClass: 'mfp-fade',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1]
    //     }
    // });

    // $('.features_video').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });
    

    
    // $(window).on('load', function() {
    //     var $container = $('.work-filter');
    //     var $filter = $('#menu-filter');
    //     $container.isotope({
    //         filter: '*',
    //         layoutMode: 'masonry',
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear'
    //         }
    //     });

    //     $filter.find('a').on("click", function() {
    //         var selector = $(this).attr('data-filter');
    //         $filter.find('a').removeClass('active');
    //         $(this).addClass('active');
    //         $container.isotope({
    //             filter: selector,
    //             animationOptions: {
    //                 animationDuration: 750,
    //                 easing: 'linear',
    //                 queue: false,
    //             }
    //         });
    //         return false;
    //     });
    // });
    

    // May replace logic with Vue.js logic to make opaque until scroll down

    // var a = 0;
    // $(window).on('scroll', function() {
    //     var oTop = $('#counter').offset().top - window.innerHeight;
    //     if (a == 0 && $(window).scrollTop() > oTop) {
    //         $('.counter_value').each(function() {
    //             var $this = $(this),
    //                 countTo = $this.attr('data-count');
    //             $({
    //                 countNum: $this.text()
    //             }).animate({
    //                 countNum: countTo
    //             }, {
    //                 duration: 2000,
    //                 easing: 'swing',
    //                 step: function() {
    //                     $this.text(Math.floor(this.countNum));
    //                 },
    //                 complete: function() {
    //                     $this.text(this.countNum);
    //                     //alert('finished');
    //                 }

    //             });
    //         });
    //         a = 1;
    //     }
    // });
    
  // }
}

</script>
