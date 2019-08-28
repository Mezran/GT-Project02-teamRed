$(document).ready(function () {




    $("#addItem").on("click", function () {
        $(".modal").show();
    });

    $(".delete").on("click", function () {
        $(".modal").hide();
    });

    $("#addToPantry").on("click", function () {
        $("#pantryList").append($("#pantryInput").val() + "<br>")
        console.log($("#pantryInput").val())
        $(".modal").hide();
        $("#pantryInput").val("")
    });

    $("#cancel").on("click", function () {
        $(".modal").hide();
    });







    $("#addImg").on("click", function () {


    });



    $("#importLoyalty").on("click", function () {


    });



    $("#searchPantry").on("click", function () {


    });






});