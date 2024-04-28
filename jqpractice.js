/*$(function(){
//jq will execute this function after the page load
$("#addbutton").click(handlebtnclick);
$("#todos li").click(removeMe);
});
function handlebtnclick(){
    //alert("Add btn");
    var newtodo = $("#newtodo").val();
    $("#todos").append("<li>" + newtodo + "</li>");
    if(!newtodo){
        $("#newtodo").addClass("error");
        return;
    }
}

function removeMe(){
    $(this).fadOut();
} */

$(function(){
    //jq will execute this function after page load
    $("#addbutton").click(handlebtnclick);
    //$("#todos li").click(removeMe);
    $("#todos").on("click", "li", removeMe);
    
    });
    function handlebtnclick()
    {
       // alert("btn clicked");
       var newtodo = $("#newtodo").val();
       if(!newtodo){
        $("#newtodo").addClass("error");
        return;
       }
       $("#newtodo").removeClass("error");
       //$("#newtodo").val("");
       $("#todos").append("<li>" + newtodo + "</li>");
       //$("#todos li").click(removeMe);
    }
    function removeMe(){
        $(this).remove();
        //$(this).fadeOut();
    }