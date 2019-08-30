$(document).ready(function () {




    $("#addItem").on("click", function () {
        $(".modal").show();
    });

    $(".delete").on("click", function () {
        $(".modal").hide();
    });

    $("#addToPantry").on("click", function () {

      const dataToSend = {
        name:$('#pantryInput').val()
      }

      // console.log(dataToSend);

      $.post('/api/addItem', dataToSend)
      .then(function(data){
        $("#pantryList").append($("#pantryInput").val() + "<br>")
        console.log($("#pantryInput").val())
        $(".modal").hide();
        $("#pantryInput").val("")
      })
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
