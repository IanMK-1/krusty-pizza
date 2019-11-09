$(document).ready(function(){
    $("button").click(function(event){
        event.preventDefault();

        pizzaPrices();
        
    });
    
});

function pizzaPrices(){
    var size = $("input[name='size']:checked").val();
    var toppings = $("input[name='toppings']:checked").val();
    var krust = $("input[name='krust']:checked").val();

    alert(size+" sized, "+toppings+" topping, "+krust+" pizza");

    var prices = [500,600,700,800,900,1000,650,750,850,550,650,750,850,950,1050,1000,1100,1200,950,1050,1150,450,550,650,1150,1250,1350];
    
    var price;

    if(size==="small" && toppings==="mushrooms" && krust==="crispy"){
        price = prices[0];
    }

    alert(price);
}