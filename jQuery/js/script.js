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
//   $(".notification-bar").delay(1000).slideDown().delay(2000).fadeOut();

    
//    $("div.hidden").show();
    
//    $("div.hidden").slideDown(500);
//    $("#box1").click(function () {
//        $(this).fadeTo(1000, 0.25, function() {
//            $(this).slideUp();
//        });
//    });
//    
//    $("button").click(function() {
//        $("#box1").slideToggle();
//    });
    
    
//    $("div#box1").click(function() {
//        $(this).text("don't touch me! just click the button!");
//    });
//    
//    $("button").click(function() {
//        $("div#box1").fadeTo(2000, 0.5, function() {
//            $(this).slideUp()
//        });
//    });
//    
//    $("button").click(function() {
//        $("div#box1").slideToggle();
//    });
    
//    
//    $("#left").click(function() {
//        $(".box").animate({
//            left: "-=40px",
//            filter: "hue, rotate(20deg)"
//        },function() {
//            
//        });
//    });
//    
//    $("#up").click(function() {
//        $(".box").animate({
//            top: "-=40px"
//        }, function() {
//            
//        });
//    });
//    
//    $("#right").click(function() {
//        $(".box").animate({
//            left: "+=40px"
//        }, function() {
//            
//        });
//    });
//    
//    $("#down").click(function() {
//        $(".box").animate({
//            top: "+=40px"
//        }, function() {
//            
//        });
//    });
//    
    
//    
//    $("#circle2").css({
//        "background": "powderblue",
//        "display": "inline-block",
//        "color": "white",
//        "text-align": "center",
//        "line-height": "140px",
//        "height": "140px",
//        "width": "140px",
//        "margin": "40px"
//    }).addClass("circleShape");
//    
    
    // Click the Go button
    $("#go").click(function(){
        
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            var isComplete = false;
            if( isComplete == false ){
               isComplete = true;
            } else {
                place = "second";
            }
            
        }
        
        // get the width of the cars
        var carWidth = $("#car1").width();
        
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        
        // generate a random # between 1000 and 4000
        var raceTime1 = Math.floor( (Math.random() * 4000) + 1000 );
        var raceTime2 = Math.floor( (Math.random() * 4000) + 1000 );
        
        // set a flag variable to FALSE by default
        
        
        // set a flag variable to FIRST by default
        var place = "first";
        
        
        // animate car 1
        $("#car1").animate({
            
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $("#raceInfo1 span").text('Finished in' + place + ' place and clocked in at' + raceTime1 + ' milliseconds!');
        });
        
        
        // animate car 2
        $("#car2").animate({
            
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $("#raceInfo2 span").text('Finished in' + place + ' place and clocked in at' + raceTime2 + ' milliseconds!');
        });
        
    });
    
    // reset the race
    $("#reset").click(function() {
        $(".car").css("left", "0");
        $(".raceInfo span").text("");
    });
    
    
    
});
