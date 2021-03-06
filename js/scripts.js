//Business Logic for Pizza
function Pizza(size, sauce) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.calculateTotal = function(){
  var total = 0;

  if (this.size === "Small") {
    total = total + 7;
  } else if (this.size === "Medium") {
    total = total + 9;
  } else if (this.size === "Large") {
    total = total + 11;
  } else if (this.size === "Extra") {
    total = total + 14;
  }

  if (this.sauce === "Alfredo") {
    total = total + 2;
  } else if (this.sauce === "BBQ") {
    total = total + 2;
  } else if (this.sauce === "Pesto") {
    total = total + 3;
  } else if (this.sauce === "Tomato") {
    total = total + 1;
  }

  this.toppings.forEach(function(topping){
    total = total + 1;
  })

  return total;
}

function attachButtonListeners() {
  $("#button1").on("click", "#btnStart", function(){
    $("#intro").hide();
    $("#orderPage").show();
  });

  $("#button2").on("click", "#btnMenu", function(){
    location.reload();
  });

  $(".jumbotron").on("click", "#pizzaTitle", function(){
    location.reload();
  })
}

//User Interface
$(document).ready(function(){
  attachButtonListeners();
  $("form#pizzaOrder").submit(function(event){
    var inputtedName = $("input#name").val();
    var inputtedEmail = $("input#email").val();
    var inputtedPhone = $("input#phone").val();

    var e = document.getElementById ("pizzaSize");
    var sizeOfPizza = e.options [e.selectedIndex] .value;
    sizeOfPizza = sizeOfPizza.split(' ');
    var size = sizeOfPizza[0];

    var e2 = document.getElementById ("pizzaSauce");
    var sauceOfPizza = e2.options [e2.selectedIndex] .value;
    sauceOfPizza = sauceOfPizza.split(' ');
    var sauce = sauceOfPizza[0];

    var pizza1 = new Pizza(size, sauce);

    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
      var pizzaTopping = $(this).val();
      pizza1.addToppings(pizzaTopping);
      $("#order-toppings").append("<li>" + pizzaTopping + "</li>");
    });

    $("#order-receipt").html("<strong>" + size + " Pizza " + sizeOfPizza[2] + "</strong>");
    $("#order-sauce").html("<strong>" + sauce + " Sauce </strong>");
    $(".name").text(inputtedName);
    $(".email").text(inputtedEmail);
    $(".totalAmount").text(pizza1.calculateTotal());

    $("#orderPage").hide();
    $("#confirmationPage").fadeIn();
    event.preventDefault();
  });
});
