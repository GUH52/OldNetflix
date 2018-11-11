function drawVideo(vid){
    
}
function addVideos(){
    $.get("clips.xml", function(xml){
        var xmlDoc = $.parseXML(xml);
        $xml = $(xmlDoc);
        $video = $xml.find("show");
        $video.each(function(){
            $("#vids").append("<p>"+"<h3>"+$(this).find("title").text()+"</h3>"+"</p>");
        });
        
    });
    
}

$(document).ready(function(){
    $.get("navigation.html", function(data){
        $("body").prepend(data);
        $("body").append("<section id=\"vids\"></section>");
        $.get("footer.html", function(data2){
            $("body").append(data2);
            $.get("ads.html", function(data3){
                $("body").append(data3);
            });
        });
    });
    
});
