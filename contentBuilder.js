
$(document).ready(function(){
    $.get("navigation.html", function(data){
        $("body").prepend(data);
        $.get("footer.html", function(data2){
            $("body").append(data2);  
        });
    });
    
});