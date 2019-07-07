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
      autoplayTimeout: 5000,
    });
  });



  $(".parent-mobile-link").on("click", function(){
    console.log("made it")
    $(this).siblings(".mobile-dropdown").toggleClass("hidden");
  })

  $("#email-form").submit(function(e){
    e.preventDefault()

    var $form = $(this);
    var serializedData = $form.serialize();

    request = $.ajax({
      url: "/tyrrell_email.php",
      type: "post",
      data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
      // Log a message to the console
      console.log("Hooray, it worked!");
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
      // Log the error to the console
      console.error(
          "The following error occurred: "+
          textStatus, errorThrown
      );
    });
  })
});