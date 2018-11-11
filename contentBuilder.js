function drawVideo(vid){
    $("#vids").append(vid);
}
function addVideos(){
    $.get("clips.xml", function(xml){
        var xmlDoc = $.parseXML(xml);
        $xml = $(xmlDoc);
        $video = $xml.find("show");
        drawVideo($video);
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
