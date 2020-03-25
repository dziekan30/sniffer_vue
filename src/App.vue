<template>
  <div id="app">

  <!-- START NAVBAR -->
    <nav class="navbar navbar-expand-lg fixed-top custom_nav_menu sticky bg-dark">
        <div class="container">
            <!-- LOGO -->
            <a class="navbar-brand logo" >
                <img src="/sniffer.png" alt="" class="img-fluid logo-light">
                <img src="/sniffer.png" alt="" class="img-fluid logo-dark">
            </a>

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
                   <!--  <li class="nav-item">
                        <router-link  class="nav-link" to="/requests">One Dog Request</router-link>
                    </li> -->
                    <!-- <li class="nav-item">
                        <a  class="nav-link">Pricing</a>
                    </li> -->
                    <li class="nav-item">
                        <!-- <a  class="nav-link">Blog</a> -->
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a  class="nav-link">Contact</a> -->
                        <router-link class="nav-link" to="/login">Log In</router-link>
                    </li>
                </ul>

                <!-- <button class="btn_custom btn btn_small text-capitalize  navbar-btn mr-3">Log In</button> -->
                    <router-link class="btn_custom btn btn_small text-capitalize  navbar-btn mr-3" to="/logout">Logout</router-link>
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

    <router-view/>


<!-- Footer Start -->
<section class="section_all bg_footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="">
                    <img src="/sniffer.png" alt="" class="">
                </div>
            </div>

            <div class="col-lg-2">
                <div class="footer_heading_tag mt-3">
                    <p class="text-uppercase font-weight-bold text-white">Services</p>
                </div>
                <div class="buss_footer_menu_list mt-3">
                    <ul class="list-unstyled mb-0">
                        <li><a href="/#">About Us </a></li>
                        <li><a href="/#">Social Media</a></li>
                        <li><a href="/#">General Question</a></li>
                        <li><a href="/#">Services</a></li>
                        <li><a href="/#">Privacy</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-2">
                <div class="footer_heading_tag mt-3">
                    <p class="text-uppercase font-weight-bold text-white">Resource</p>
                </div>
                <div class="buss_footer_menu_list mt-3">
                    <ul class="list-unstyled mb-0">
                        <li><a href="/#">Blog </a></li>
                        <li><a href="/#">Review</a></li>
                        <li><a href="/#">Tutorials</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="footer_heading_tag mt-3">
                    <p class="text-uppercase font-weight-bold text-white">Help</p>
                </div>
                <div class="buss_footer_menu_list mt-3">
                    <ul class="list-unstyled mb-0">
                        <li><a href="/#">Help Desk </a></li>
                        <li><a href="/#">Multipurpose</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="row mt-3">
            <div class="col-lg-12">
                <div class="text-center mt-3">
                    <p class="footer_alt_cpy mb-0">2020 &copy; Sniffer. Design by K.D.</p>
                </div>
                <div class="text-center buss_icon_social_footer mt-3">
                    <ul class="list-inline  mb-0">
                        <li class="list-inline-item"><a href="/" class=""><i class="mdi mdi-facebook"></i></a></li>
                        <li class="list-inline-item"><a href="/" class=""><i class="mdi mdi-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="/" class=""><i class="mdi mdi-linkedin"></i></a></li>
                        <li class="list-inline-item"><a href="/" class=""><i class="mdi mdi-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</section>
<!-- Footer End -->


<!-- Start Cta -->
   <!--  <section class="section_all bg_cta_business_img">
        <div class="bg_overlay_cover_on"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center text-white">
                        <h2 class="">“A dog is the only thing on earth that loves you more than you love yourself.” – Josh Billings</h2>
                       <div class="mt-4 pt-3">
                        <a href="/#" class="btn btn_custom btn-rounded font-weight-bold"><i class="mdi mdi-phone"></i> Call (312-468-....)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- End Cta -->

  </div>
</template>

<style>
.dog-pict {
  height: 325px;
  width: 400px;
  margin: 10px;
}
.bg_overlay_cover_o {
  position: absolute;
  bottom: 10px;
  width: 50%;
  border: 3px solid #8AC007; 
}

.kd:hover {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 400px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  }
  
body {
  background-color: #d0dbf4;
 
}
.navbar {
  margin-bottom: 50%;

}
#section_all {
  margin-top: 30%;
  margin-bottom: 0%;
}
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
