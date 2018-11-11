
$(document).ready(function(){
    $.get("navigation.html", function(data){
        $("body").append(data);
    });
    $("body").append("<br><br>");
    $.get("footer.html", function(data2){
        $("body").append(data2);  
    });
});