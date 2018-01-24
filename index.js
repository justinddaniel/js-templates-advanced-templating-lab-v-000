function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
  var template = Handlebars.compile(document.getElementById("recipe-details-partial").innerHTML);
  var html = template({name});
}
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
