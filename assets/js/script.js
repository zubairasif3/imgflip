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

$("#searchBar").focus(function() {
    var formGroup = $(this).closest(".form-group");
    $(formGroup).addClass("bg-white");
})
$("#searchBar").blur(function() {
    var formGroup = $(this).closest(".form-group");
    $(formGroup).removeClass("bg-white");
})