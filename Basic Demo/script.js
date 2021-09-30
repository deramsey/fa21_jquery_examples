/* Standard, Vanilla Javascript
var circ = document.querySelector("#circle");
circ.style.backgroundColor = "green";
*/

$( document ).ready( function() {

    $( "#click" ).on("click", function(){

        if($( "#circle" ).css( "background-color") == "rgb(0, 128, 0)"){
            $( "#circle" ).css("background-color", "red");
        }
        else{
            $( "#circle" ).css("background-color", "green");
        }

    });
});