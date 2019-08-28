$(document).ready(function () {

    $("#all").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?food)')
    });

    $("#veg").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?vegetables)')
    });


    $("#dairy").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?food)')
    });

    $("#mexican").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/collection/8518950)')
        $("#banner").css('background-size', '100% 100%')
    });

    $("#chinese").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/collection/8518687)')
        $("#banner").css('background-size', '100% 100%')
    });

    $("#american").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/collection/8518993)')
        $("#banner").css('background-size', '100% 100%')
    });

    $("#italian").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/collection/8518975)')
        $("#banner").css('background-size', '100% 100%')
    });

});