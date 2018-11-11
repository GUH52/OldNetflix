
$(document).ready(function(){
    $.get("navigation.html", function(data){
        $(this).append(data);
    });
    $("body").load("footer.html");
});