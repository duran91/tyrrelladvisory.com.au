$(function() {

  $("#background-info-toggle").on("click", function(){
    $(".shade").toggle();
    $("#personal-info").toggleClass("minimised-content");
    $("#background-arrow").toggleClass("rotate");
    var title = $("#background-toggle-title");
    title.text() == "Read More" ? title.text("Read Less") : title.text("Read More");
  })

  $(document).ready(function(){
    $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
    });
  });

  $(".parent-mobile-link").on("click", function(){
    console.log("made it")
    $(this).siblings(".mobile-dropdown").toggleClass("hidden");
  })
});