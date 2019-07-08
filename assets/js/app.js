$(function() {

  $("#background-info-toggle").on("click", function(){
    $(".shade").toggle();
    $("#personal-info").toggleClass("minimised-content");
    $("#background-arrow").toggleClass("rotate");
    var title = $("#background-toggle-title");
    title.text() == "Read More" ? title.text("Read Less") : title.text("Read More");
  })

  $(document).ready(function(){
    $(".navbar-toggler").on("click", function(){
      console.log("test")
      $('#nav-icon1').toggleClass('open');
    })
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:0,
      nav: false,
      dots: true,
      dotsEach: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 7000,
    });
  });


  $(".parent-mobile-link").on("click", function(){
    $(this).siblings(".mobile-dropdown").toggleClass("hidden");
  })
});