//code with td
$(function(){
    // jq will execute this function after page load
    $("#addbutton").click(handlebtnclick);
    // $("#todos td").click(removeMe);
    $("#todos").on("click", "td", removeMe);
});

function handlebtnclick() {
    // alert("btn clicked");
    var newtodo = $("#newtodo").val();
    if (!newtodo) {
        $("#newtodo").addClass("error");
        return;
    }
    $("#newtodo").removeClass("error");
    // $("#newtodo").val("");
    $("#todos").append("<td>" + newtodo + "</td>");
    // $("#todos td").click(removeMe);
}

function removeMe() {
    $(this).remove();
     $(this).fadeOut();
}














//code with li 

/*$(function(){
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
    } */ 

