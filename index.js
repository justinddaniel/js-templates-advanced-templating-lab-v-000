function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}







//page and handlebars initializers
function init() {
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
