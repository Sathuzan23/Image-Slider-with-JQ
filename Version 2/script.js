$(window).on('load', function () {
    'use strict'

    const imagecount = $('#slider ul li').length;
    const imagewidth = $('#slider ul li img').first().width();

    const totalwidth = imagecount * imagewidth;
    $('#slider ul').css('width', totalwidth);

    let leftposition = 0;
    let counter = 0;

    $('#next').click(function () {

        counter++;
        if (counter > imagecount - 1) {
            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left', imagewidth);

            $('#slider ul').last().animate({ left: 0 }, 500, "easeInQuad");
            $('#slider ul').first().animate({ left: -totalwidth }, 500, "easeInQuad", function () {
                $('#slider ul').first().remove();
            });

            counter = 0;
            leftposition = 0;
        }
        else {
            leftposition -= imagewidth;
            $('#slider ul').animate({ left: leftposition }, 500, "easeInQuad");
        }

    });

    $('#previous').click(function () {

        counter--;
        if (counter < 0) {
            counter = imagecount - 1;
            leftposition = -(counter * imagewidth);

            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left', -totalwidth);

            $('#slider ul').last().animate({ left: leftposition }, 500, "easeInQuad");
            $('#slider ul').first().animate({ left: imagewidth }, 500, "easeInQuad", function () {
                $('#slider ul').first().remove();
            });

        }
        else {
            leftposition = -(counter * imagewidth);
            $('#slider ul').animate({ left: leftposition }, 500, "easeInQuad");
        }

    });

});