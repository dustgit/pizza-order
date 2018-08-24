// business logic
function Pizza(name, size, toppings) {
  this.name = name;
  this.pizzaSize = size;
  this.toppings = toppings;
}
Pizza.prototype.pricing = function() {
  if (this.when == "oldMovie") {
    return "4"
  } else if (this.age == "kidPrice") {
    return "5"
  } else if (this.age == "seniorPrice") {
    return "7"
  } else if (this.time == "beforeFive") {
    return "8"
  } else {
    return(10) }
  }


$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var pizzaSize = $("input#size").val();
    var pizzaToppings = $()
