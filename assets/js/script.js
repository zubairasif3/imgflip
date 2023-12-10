/* FadeIn */
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeIn').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},900);
            }
        }); 
    });
    $(window).scroll();
});

$("#mb-search-show").click(function() {
    $(".header").toggleClass("search-show");
})