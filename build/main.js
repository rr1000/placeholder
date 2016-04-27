$('document').ready(function(){

    var menuBtn = $('.menu-btn');
    var menu = $('nav');

    menuBtn.click(function(){
        menu.toggleClass('menu-retract');
        $(this).toggleClass('menu-btn-extend');
    });

});
