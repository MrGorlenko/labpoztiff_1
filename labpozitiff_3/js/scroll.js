$(document).ready(function(){
    $("#button").on("click","a",function(event){
        // event.preventDefault();
        var elem  = $(this).attr('href'),
            top = $(elem).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});