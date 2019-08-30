$(document).ready(function () {



    // Add Item Button For Modal Popup
    $("#addItem").on("click", function () {
        $("#addItemModal").show();
    });

    $(".delete").on("click", function () {
        $("#addItemModal").hide();
        $("#pantryInput").val("")
    });

    $("#addToPantry").on("click", function () {
        let nameValue = $("#nameSearch").val();
        let quantitySearch = $("#quantitySearch").val();
        let expDateSearch = $("#expDateSearch").val();
        let tbd = $("#tbd").val();

        $("#tableBody").append(`
            <tr>
            <td>${nameValue}</td>
            <td>${quantitySearch}</td>
            <td>${expDateSearch}</td>
            <td>${tbd}</td>
            </tr>
        `)

        $("#addItemModal").hide();
        $("#pantryInput").val("")
    });

    $("#cancel").on("click", function () {
        $("#addItemModal").hide();
        $("#pantryInput").val("")
    });




    // Add Image Button 
    $("#addImg").on("click", function () {


    });


    // Import From Loyalty Button
    $("#importLoyalty").on("click", function () {


    });

    // Delete On Clicked Row

    let rowAnswer = $("#tableBody").text();

    $("#tableBody").on("click", function(){
        $("#tableBody").empty()
    })






});