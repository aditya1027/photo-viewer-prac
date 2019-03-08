$(function(){

 
    
  

    function setImg(src,id)
    {
        $("#main").attr("src",src);
        var path="txt/"+id+".txt";
        $.get(path,function(data){
         $("#description p").html(data);
        });
    }

    var current_li;
    $("#portfolio img").click(function(){
        var src=$(this).attr("src");
        var id=$(this).attr("id");
        current_li=$(this).parent();
        setImg(src,id);
        $("#frame").fadeIn();
        $("#overlay").fadeIn();
    });

    $("#overlay").click(function(){
        $(this).fadeOut();
        $("#frame").fadeOut();
    });

    $("#right").click(function(){

        if(current_li.is(":last-child")){
         var next_li=$("#portfolio li").first();
        }
        else{
            var next_li=current_li.next();
        }
        var next_src=next_li.children("img").attr("src");
        var next_id=next_li.children("img").attr("id");
        $("#main").attr("src",next_src);
        setImg(next_src,next_id);
        current_li=next_li;
    });

    $("#left").click(function(){

        if(current_li.is(":first-child")){
            var prev_li=$("#portfolio li").last();
           }
           else{
               var prev_li=current_li.prev();
           }
        var prev_src=prev_li.children("img").attr("src");
        var prev_id=prev_li.children("img").attr("id");
        $("#main").attr("src",prev_src);
        setImg(prev_src,prev_id);
        current_li=prev_li;
    });

    $("#left, #right").mouseover(function(){
        $(this).css("opacity","0.85")
    });

    $("#left, #right").mouseleave(function(){
        $(this).css("opacity","0.6")
    });


});