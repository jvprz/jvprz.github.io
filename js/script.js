$(function() {
    $('#menu ul li a:not(#home a):not(.dropdown-content a)').hover(function() {
        $('#menu ul li a p').css('background-color','yellow');
    }, function() {
        $('#menu ul li a p').css('background-color','');
    });
});