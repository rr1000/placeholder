$(document).ready(function(){
    console.log('cargo secured');
    var menuBtn = $('nav .btn');
    var menuUl = $('nav ul');

    menuBtn.click(function(){
        menuUl.fadeToggle(500);
    });
});
