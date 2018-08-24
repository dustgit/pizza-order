// business logic
function Pizza(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 10;
}

Pizza.prototype.pricing = function() {
  if (this.size === " Fifteen Inches") {
    this.basePrice += 5;
  } else if (this.size === " Fifteen Inches") {
    this.basePrice += 10;
    console.log(basePrice+ " Twenty Inches");
  return this.basePrice;
  }
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
    $("#displayToppings").text(onePizza.basePrice);
    $("#displaySize").text(onePizza.size);
    $("#displayTotal").text(onePizza.basePrice);
  });
});
