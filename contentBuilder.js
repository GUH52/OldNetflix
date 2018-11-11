
$(document).ready(function(){
    $.get("navigation.html", function(data){
        $(this).append(data);
    });
    $.get("footer.html", function(data){
        $(this).append(data);  
    });
});