function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "How about a One-Pan Chicken and Veggies recipe? It's easy, quick, and perfect for a family meal! It requires minimal prep and is healthy too.",
    autoStart: true,
    cursor: " ",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
