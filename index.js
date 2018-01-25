function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
  var recipe = {
    name: 'chicken noodle soup'
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'},
      {quantity: "5 grams", name: 'salt'},
      {quantity: "1 microgram", name: 'pepper'}
    ]
  }
  var template = Handlebars.compile(document.getElementById("recipe-details-partial").innerHTML);
  var html = template({recipe});
}
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
