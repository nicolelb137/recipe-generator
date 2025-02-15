function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userIngredient = document.querySelector("#user-ingredient");
  let apiKey = "be641daeo4c4132c8da3cfa3610475tb";
  let context =
    "You love to cook.  Please create a delicious and simple recipe that uses the user's ingredient. Format the recipe to include 3 separate sections: Title, Ingredients, Instructions.";
  let prompt = `User's ingredient: ${userIngredient.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
