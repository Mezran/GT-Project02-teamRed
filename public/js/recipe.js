

function api() {

    const apiKey = "&apiKey=b516d1d8d8d2433395840447b28b3022"
    let title = "";
    let image = "";
    let id = "";

    let ingredientInput = $(".ingredient-name").text()
    console.log(ingredientInput)
    ingredientInput = ingredientInput.split(" ").join(",+")
    console.log("input:" + ingredientInput)

    // let ingredientArray ="";
    // console.log("array" + ingredientArray)
    // ingredientInput.each(function () {
    //     ingredientArray.push($(this).text());
    // });

    // console.log("array" + ingredientArray)

    // const apiKey = "&apiKey=baedc2b8641b49bc936eef03969c23dd"
    let ingredients = "ingredients=" + ingredientInput;
    const queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?" + ingredients + apiKey;



    // const queryUrl="https://api.spoonacular.com/recipes/search?query=burger&apiKey=baedc2b8641b49bc936eef03969c23dd";



    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (result) {
        console.log(result)
        for (let i = 0; i < result.length; i++) {

            title = result[i].title
            image = result[i].image
            id = result[i].id

            $("#foodTitle").append(`
            <tr data-id="${id}">
            <td>${title }</td>
            </tr>
            `)
            console.log(result[i])

        }

    });



}

// res.results[0].id

$("#foodTitle").on("click", 'tr', function () {
    const apiKey = "&apiKey=b516d1d8d8d2433395840447b28b3022"
    $("#api").show();

    const id = $(this).attr("data-id");

    queryUrl2 = "https://api.spoonacular.com/recipes/" + id + "/analyzedInstructions?" + apiKey;
    // queryUrl2 = "https://api.spoonacular.com/recipes/"+id+"/summary?" + apiKey;
    // queryUrl2= "https://api.spoonacular.com/recipes/"+id+"/ingredientWidget?"+apiKey;
    console.log(queryUrl2)

    $.ajax({
        url: queryUrl2,
        method: "GET"
    }).then(function (res) {

        // let steps =res[0].steps[i].step
        // steps=steps.split(".").join(  )

        console.log(res[0])
        for (let i = 0; i < res[0].steps.length; i++) {

            let steps = res[0].steps[i].step
            $("#apiContent").append(`<div>${i+1}. ${steps}</div>`)
            console.log(res)
        }
    });

});
$("#apiClose").on("click", function () {
    $("#api").hide();
    $("#apiContent").empty();

});
$("#apiOkay").on("click", function () {
    $("#api").hide();
    $("#apiContent").empty();
});






    // const apiKey = "&apiKey=baedc2b8641b49bc936eef03969c23dd"
    // let title = "";
    // let image = "";
    // let id = "";
    // let ingredientInput = $(".ingredient-name").text()
    // ingredientInput = ingredientInput.split(" ").join(",+")
    // console.log("input:" + ingredientInput)

    // let ingredients = "&includeIngredients=" + ingredientInput;
    // const queryUrl = "https://api.spoonacular.com/recipes/complexSearch?cuisine=mexican" + ingredients + apiKey;
    // console.log(querUrl)



    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function (result) {




    //     for (let i = 0; i < result.length; i++) {


    //         $("#mexican").on("click", function () {
    //             alert(result[i].title)

    //             title = result[i].title
    //             image = result[i].image
    //             id = result[i].id

    //             $("#foodTitle").append(`
    //             <tr>
    //             <td>${title}</td>
    //             </tr>
    //             `)
    //             console.log(result[i])
    //         });

    //     }

    // });


