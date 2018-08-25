// business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 10;
}

Pizza.prototype.pricing = function() {
    if (this.size == 15) {
    this.basePrice += 5;
  } else if (this.size == 20) {
    this.basePrice += 10;
  }
  return this.basePrice;
}


// user interface logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#userName").val();

    var inputSize = $("input[name=size]:checked").val();
    var inputToppings = [];
    $("input[name=toppings]:checked").each(function() {
    inputToppings.push($(this).val())
  });

    var onePizza = new Pizza(inputSize, inputToppings);
    var total = parseInt(onePizza.pricing());
    $("#orderReceipt").show();
    $("#displayToppings").text(onePizza.toppings);
    $("#displaySize").text(onePizza.size);
    $("#displayTotal").text(onePizza.basePrice);
debugger;
  });
});
