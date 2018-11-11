
$(document).ready(function(){
    $.get("navigation.html", function(data){
        $("body").append(data);
    });
    $.get("footer.html", function(data){
        $("body").append(data);  
    });
});