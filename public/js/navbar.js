$(document).ready(function () {


    $("#addItem").on("click", function () {
        $("#addItemModal").show();
    });

    $(".delete").on("click", function () {
        $("#addItemModal").hide();
        $("#pantryInput").val("")
    });

    $("#addToPantry").on("click", function () {
        $("#pantryList").append($("#pantryInput").val() + "<br>")
        $("#addItemModal").hide();
        $("#pantryInput").val("")
    });

    $("#cancel").on("click", function () {
        $("#addItemModal").hide();
        $("#pantryInput").val("")
    });







    $("#addImg").on("click", function () {


    });



    $("#importLoyalty").on("click", function () {


    });






});