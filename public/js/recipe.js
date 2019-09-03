

$(document).ready(function () {

    function api() {

        const ingredientInput = $(".ingredient-name");

        const ingredientArray = [];
        ingredientInput.each(function () {
          ingredientArray.push( $(this).text() );
        });
        
        console.log( ingredientArray.join(",+") )
    
        const apiKey="&apiKey=baedc2b8641b49bc936eef03969c23dd"
        let ingredients = "ingredients="+ ingredientArray;
        const queryUrl="https://api.spoonacular.com/recipes/findByIngredients?"+ ingredients + apiKey;
        
        
        
        // const queryUrl="https://api.spoonacular.com/recipes/search?query=burger&apiKey=baedc2b8641b49bc936eef03969c23dd";
        
    
    
        $.ajax ({
            url: queryUrl,
            method: "GET"
        }).then(function(result){
            console.log(result);
        });

    }

   




});