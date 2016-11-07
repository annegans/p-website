
console.log("helloworld")


$( document ).ready(function() {


  $( "#design").click(function() {
      console.log("hellodesign")
      $("#design1").insertAfter("#after").animate({top: '5px'});
      $("#design2").insertAfter("#after").animate({top: '5px'});
      $("#design3").insertAfter("#after").animate({top: '5px'});
      $("#dev1").insertAfter("#last").animate({top: '5px'});
      $("#dev2").insertAfter("#last").animate({top: '5px'});
      $("#dev3").insertAfter("#last").animate({top: '5px'});
      $("#mix1").insertAfter("#middle").animate({top: '5px'});
      $("#mix2").insertAfter("#middle").animate({top: '5px'});
      $("#mix3").insertAfter("#middle").animate({top: '5px'});
  });


  $( "#dev").click(function() {
      console.log("hellodev")
      $("#design1").insertAfter("#last");
      $("#design2").insertAfter("#last");
      $("#design3").insertAfter("#last");
      $("#dev1").insertAfter("#after");
      $("#dev2").insertAfter("#after");
      $("#dev3").insertAfter("#after");
      $("#mix1").insertAfter("#middle");
      $("#mix2").insertAfter("#middle");
      $("#mix3").insertAfter("#middle");
  });

  $( "#mix").click(function() {
      console.log("hellomix")
      $("#design1").insertAfter("#last");
      $("#design2").insertAfter("#last");
      $("#design3").insertAfter("#last");
      $("#dev1").insertAfter("#middle");
      $("#dev2").insertAfter("#middle");
      $("#dev3").insertAfter("#middle");
      $("#mix1").insertAfter("#after");
      $("#mix2").insertAfter("#after");
      $("#mix3").insertAfter("#after");
  });

  $("#work-ex").click(function(){ 
    $("#work-ex").css("background-color","black");
    $("#work-ex").css("color","white");
    $("#skills").css("background-color","white");
    $("#skills").css("color","black");
    $("#education").css("background-color","white");
    $("#education").css("color","black");
    $(".education-content").addClass("alltabs");
    $(".education-content").removeClass("active-tab");
    $(".skills-content").addClass("alltabs");
    $(".skills-content").removeClass("active-tab");
    $(".work-content").removeClass("alltabs");
    $(".work-content").addClass("active-tab");


  })

  $("#skills").click(function(){ 
    $("#skills").css("background-color","black");
    $("#skills").css("color","white");
    $("#education").css("background-color","white");
    $("#education").css("color","black");
    $("#work-ex").css("background-color","white");
    $("#work-ex").css("color","black")
    $(".work-content").addClass("alltabs");
    $(".work-content").removeClass("active-tab");
    $(".education-content").addClass("alltabs");
    $(".education-content").removeClass("active-tab");
    $(".skills-content").removeClass("alltabs");
    $(".skills-content").addClass("active-tab");




  })

    $("#education").click(function(){ 
      $("#education").css("background-color","black");
      $("#education").css("color","white");
      $("#work-ex").css("background-color","white");
      $("#work-ex").css("color","black");
      $("#skills").css("background-color","white");
      $("#skills").css("color","black");
      $(".work-content").addClass("alltabs");
      $(".work-content").removeClass("active-tab");
      $(".skills-content").addClass("alltabs");
      $(".skills-content").removeClass("active-tab");
      $(".education-content").removeClass("alltabs");
      $(".education-content").addClass("active-tab");


  })




   $('#float-right').click(function(){
    $().addClass("active");
  });




});