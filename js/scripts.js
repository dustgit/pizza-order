// business logic
function Pizza(name, size, toppings, basePrice) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 10;
}

Pizza.prototype.pricing = function() {

  if (this.size === "fifteenInch") {
    this.basePrice += 5;
  } else if (this.size === "twentyInch") {
    this.basePrice += 10;
  }
  this.baseprice += this.toppings.length;
  return this.baseprice;
}


// user interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#orderReceipt").show();

    var inputName = $("input#userName").val();
    var inputSize = $("#sizeSelected").val();
    var inputToppings = [];
     $("input:checkbox:checked").each() {inputToppings.push($(this).val());}
    console.log(inputName + " " + inputSize + " " + inputToppings);

    var onePizza = new Pizza(inputSize, inputToppings);
    var total = newPizza.pricing();
    $(".pizzaSize").text(newPizza.pizzaSize);
    $("#displaytotal").text(newPizza.basePrice);
    $("#orderReceipt").show();

  });
});
