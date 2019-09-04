$(document).ready(function () {

    const apiKey = "&apiKey=baedc2b8641b49bc936eef03969c23dd"
    let title = "";
    let image = "";
    let id = "";


    // Add Item Button For Modal Popup

    


    $("#addItem").on("click", function () {
        $("#addItemModal").show();
        $("#foodTitle").empty();
    });

    $(".delete").on("click", function () {
        $("#addItemModal").hide();
        $(".input").val("")
        api();
    });

    $("#addToPantry").on("click", function () {

        const dataToSend = {
            name: $('#nameSearch').val()
        }

        console.log(dataToSend);

        $.post('/api/addItem', dataToSend)
            .then(function (data) {
                $("#pantryList").append($("#pantryInput").val() + "<br>")
                // console.log($("#pantryInput").val())
                $(".modal").hide();
                $("#pantryInput").val("")
            })
        let nameValue = $("#nameSearch").val();
        let quantitySearch = $("#quantitySearch").val();
        let expDateSearch = $("#expDateSearch").val();


        $("#tableBody").append(`
            <tr>
            <td class="ingredient-name">${nameValue} </td>
            <td>${quantitySearch}</td>
            <td>${expDateSearch}</td>
            
            </tr>
        `)


        $("#addItemModal").hide();
        $(".input").val("");
        api();
    });

    $("#cancel").on("click", function () {
        $("#addItemModal").hide();
        $(".input").val("")
        api();
    });




    // Add Image Button
    $("#addImg").on("click", function () {


    });


    // Import From Loyalty Button
    $("#importLoyalty").on("click", function () {


    });

    // Delete On Clicked Row
    $("#tableBody").on("click", 'tr', function () {
        $(this).remove()
        $("#foodTitle").empty();
        api();
    })


    // $("#tableBody").on("mouseleave","tr", function() {
    //     $(this).css('background', 'white')
    //     $(this).css('color', 'black')
    // })

    // $("#tableBody").on("mouseover", "tr", function() {
    //     $(this).css({
    //         'color': "white",
    //         'background': 'url( https://icon-library.net/images/trash-can-vector-icon/trash-can-vector-icon-15.jpg)',
    //         'background-size': "25% 2.2em",
    //         'background-repeat': "no-repeat",
    //         'background-position': "center"
    //     })
    // $(this).css('background', 'url( https://icon-library.net/images/trash-can-vector-icon/trash-can-vector-icon-15.jpg)')
    // $(this).css('background-size', "100% 2.2em")
    // $(this).css('background-repeat', "no-repeat")
    // $(this).css('background-position-x', "20px")

    // $(this).css('background-position', "center top")
    // })









});
