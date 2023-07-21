$(window).on('load', function () {
    'use strict'

    const imagecount = $('#slider ul li').length;
    const imagewidth = $('#slider ul li img').first().width();

    const totalwidth = imagecount * imagewidth;
    $('#slider ul').css('width', totalwidth);

    let leftposition = 0;
    let counter = 0;

    $('#next').click(function () {
        leftposition -= imagewidth;
        counter++;
        if (counter > imagecount - 1) {
            counter = 0;
            leftposition = 0;
        }
        $('#slider ul').animate({ left: leftposition }, 500, "easeInQuad");
    });

    $('#previous').click(function () {
        leftposition += imagewidth;
        counter--;
        if (counter < 0) {
            counter = imagecount - 1;
            leftposition = -totalwidth + imagewidth;
        }
        $('#slider ul').animate({ left: leftposition }, 500, "easeInQuad");
    });

});