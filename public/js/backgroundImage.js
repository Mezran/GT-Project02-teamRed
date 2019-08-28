$(document).ready(function () {

    $("#veg").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?vegetables)')
    });


    $("#dairy").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?)')
    });

    $("#mexican").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?)')
    });

    $("#chinese").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/user/)')
    });

    $("#american").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?burger-and-hotdog)')
    });

    $("#italian").on("click", function (e) {
        e.preventDefault();
        $("#banner").css('background', 'url(https://source.unsplash.com/random/?lasagne%2C-risotto%2C-bruschetta%2C-parmigiana%2C-truffles)')
    });

});