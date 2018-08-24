// business logic
function Pizza(name, size, toppings) {
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
  return this.basePrice;
  }
}


// user interface logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#userName").val();
    console.log(inputName);
    var inputSize = $("input[name=size]:checked").val();
    console.log(inputSize);
    var inputToppings = [];
    $("input[name=toppings]:checked").each(function() {
    inputToppings.push($(this).val())
  });
    console.log(inputToppings);

    var onePizza = new Pizza(inputSize, inputToppings);
    var total = onePizza.pricing();
    $("#displayToppings").text(onePizza.basePrice);
    $("#displaySize").text(onePizza.size);
    $("#displyTotal").text(onePizza.total);
    $("#orderReceipt").show();

  });
});
