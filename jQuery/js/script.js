// script.js

$(function() {
   
//    $("h2,h3,h4").css("border","1px solid red");
//    $("div#container").css("border","1px solid red");
//    $("li:odd").css("border","1px solid red");
//    $("div>p").css("border","1px solid red");
//    $(":header").css("border","1px solid red");
//    $("div:contains('Brad')").css("border","1px solid red");
    
//    $("#box").click(function() {
//        alert("you just click the box");
//    });
//    
//    $("input").blur(function() {
//        if($(this).val() == "") {
//            $(this).css("border","solid 1px red");
//            $("#box").text("forget to add text");
//        }
//    });
//    
//    $("input").keydown(function() {
//        if($(this).val() !== "") {
//            $(this).css("border","solid 1px #777");
//            $("#box").text("Thanks for that");
//        }
//    });
//    
//    $("#box").hover(function() {
//        $(this).css("background-color", "powderblue");
//        $(this).text("You hovered in!");
//        $(this).css("transition", "all 3s ease-in-out");
//    }, function() {
//        $(this).css("background-color", "orange");
//        $(this).text("You hovered out!");
//        
//    });
//    
//    $(".notification-bar").delay(1000).slideDown().delay(1000).fadeOut();

    
//    $("div.hidden").show();
    $("div.hidden").slideDown(500);
    $("#box1").click(function () {
        $(this).fadeTo(1000, 0.25, function() {
            $(this).slideUp();
        });
    });
    
    $("button").click(function() {
        $("#box1").slideToggle();
    });
    
    
    
    
    
    
    
});
