//Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}




//User Interface
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    var inputtedName = $("input#name").val();
    var inputtedEmail = $("input#email").val();
    var inputtedPhone = $("input#phone").val();



    $(".name").text(inputtedName);
    $(".email").text(inputtedEmail);
    $(".totalAmount").text(pizza1.calculateTotal());


    event.preventDefault();
  });
});
