$(document).ready( function(){

    /*Long way to hover
    $("#hover-example").on("mouseenter", function(){
        $(this).css({"background": "#ff99aa", "color": "white"}).text("Your mouse is over me!");
    });
    $("#hover-example").on("mouseleave", function(){
        $(this).css("background", "#99ff77").css("color", "black").text("Do it again!");
    });*/

    /*Short way to hover*/
    $("#hover-example").hover( function() {
        $(this).css({"background": "#ff99aa", "color": "white"}).text("Your mouse is over me!");
    },
    function(){
        $(this).css("background", "#99ff77").css("color", "black").text("Do it again!");   
    });


    $(".listAdd").on("click", function(){
        let word = $(".wordIn").val();

        $(".words").append("<li>" + word + "</li>");
    })

    $("#dm-label").on("click", function(){
        if($("#dm").is(":checked")){
            $("html").css("filter", "invert(1) hue-rotate(180deg)");
            
        }
        else{
            $("html").css("filter", "invert(0) hue-rotate(0deg)");
        }
    })



});