// business logic
function Pizza(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
}

function Toppings(fourCheese, onionBrie, crimini, spinach, olives, carnage) {
  this.fourCheese = fourCheese;
  this.onionBrie = onionBrie;
  this.crimini = crimini;
  this.spinach = spinach;
  this.olives = olives;
  this.carnage = carnage;
}
function Size(twelve, fifteen, twenty) {
  this.twelve = 12;
  this.fifteen = 15;
  this.twenty = 20;
}

Pizza.prototype.pizzaCost = function(toppingsNumber) {

  var total = (toppingsNumber + 3)
  return total;
}









// user interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var userName = $("input#userName").val();
    var pizzaSize = $("input.pizzaSize").val();
    var pizzaToppings = $(".toppings:checkbox:checked").val();
    console.log(userName + " " + pizzaSize + " " + pizzaToppings);
  });
